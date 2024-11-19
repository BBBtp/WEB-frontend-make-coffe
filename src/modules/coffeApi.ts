import { mockIngredients } from '../mock services/mockData.ts'; // Импорт моков

const API_PREFIX = '/api/'; // Префикс для проксированных запросов

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

        const queryString = new URLSearchParams(params).toString(); // Генерируем строку запроса
        const url = `${API_PREFIX}ingredients/?${queryString}`; // Используем относительный путь

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
        } catch (error) {
            console.error("Ошибка получения ингредиентов с сервера:", error.message);
            console.warn("Возвращаем данные из mock-объектов");

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
        const url = `${API_PREFIX}ingredients/${id}/`; // Используем относительный путь

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
        } catch (error) {
            console.error("Ошибка получения ингредиента с сервера:", error.message);
            console.warn("Возвращаем данные из mock-объектов для ингредиента");

            // Если ошибка при запросе, ищем в mock-данных по id
            const ingredient = mockIngredients.find((item) => item.id === parseInt(id));
            return ingredient || null; // Если не нашли, возвращаем null
        }
    },
};
