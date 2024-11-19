import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './breadcrumbs.css';
import { api } from '../../modules/coffeApi'; // Ваш API для получения данных

function Breadcrumbs() {
    const { id } = useParams(); // Получаем ID ингредиента из URL
    const [ingredientName, setIngredientName] = useState("");

    useEffect(() => {
        if (id) {
            // Загружаем данные ингредиента по ID только если есть ID
            api.getIngredient(id)
                .then((data) => setIngredientName(data.ingredient_name))
                .catch((err) => console.error("Ошибка загрузки ингредиента:", err));
        } else {
            setIngredientName(""); // Очищаем имя ингредиента для страницы списка
        }
    }, [id]);

    // Хлебные крошки
    return (
        <nav aria-label="breadcrumb" className="breadcrumbs">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Главная</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to="/ingredients">Ингредиенты</Link>
                </li>
                {id && (
                    <li className="breadcrumb-item active" aria-current="page">
                        {ingredientName || "Загрузка..."}
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
