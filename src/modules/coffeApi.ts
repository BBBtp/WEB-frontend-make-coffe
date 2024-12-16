import { mockIngredients } from '../mock services/mockData'; // Импорт моков
import { dest_api } from "../../target_config"; // Импорт адресов из target_config

interface GetIngredientsParams {
    ingredient_name?: string;
}

export const api = {
    // Получение списка ингредиентов
    async getIngredients(searchQuery: string = "") {
        const params: GetIngredientsParams = {};

        if (searchQuery) {
            params.ingredient_name = searchQuery; // Добавляем параметр поиска, если он есть
        }

        const queryString = new URLSearchParams(params as Record<string, string>).toString();
        const url = `${dest_api}/ingredients/?${queryString}`; // Используем dest_api

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Парсим JSON
            return data; // Возвращаем данные
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Ошибка получения ингредиентов с сервера:", error.message);
            } else {
                console.error("Неизвестная ошибка при получении ингредиентов");
            }

            // Фильтруем мок-данные на основе строки поиска
            const filteredMocks = searchQuery
                ? mockIngredients.filter((item) =>
                    item.ingredient_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                )
                : mockIngredients;

            // Если ошибка при запросе, возвращаем отфильтрованные мок-данные
            return { ingredients: filteredMocks };
        }
    },

    // Получение конкретного ингредиента по ID
    async getIngredient(id: string) {
        const url = `${dest_api}/ingredients/${id}/`; // Используем dest_api

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Парсим JSON
            return data; // Возвращаем данные
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Ошибка получения ингредиента с сервера:", error.message);
            } else {
                console.error("Неизвестная ошибка при получении ингредиента");
            }

            // Если ошибка при запросе, ищем в mock-данных по id
            const ingredient = mockIngredients.find((item) => item.id === parseInt(id));
            return ingredient || null; // Если не нашли, возвращаем null
        }
    },
};
