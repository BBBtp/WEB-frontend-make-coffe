import './about ingredient page.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../modules/coffeApi';
import { Container, Spinner } from "react-bootstrap";
import Breadcrumbs from "../../components/bread crumbs/BreadCrumbs.tsx";
import placeholder from '../../assets/Social Media Icons (Community)/camera.svg'
function AboutIngredientPage() {
    const { id } = useParams(); // Извлекаем id из URL
    const [ingredient, setIngredient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIngredient = async () => {
            try {
                const data = await api.getIngredient(id);
                setIngredient(data); // Устанавливаем данные ингредиента
            } catch (err) {
                console.error("Ошибка загрузки ингредиента:", err);
                setError("Не удалось загрузить данные об ингредиенте");
            } finally {
                setLoading(false);
            }
        };

        fetchIngredient();
    }, [id]);

    if (loading) {
        return (
            <Container className="py-5 text-center">
                <Spinner animation="border" variant="primary" />
                <p>Загрузка...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5 text-center">
                <p className="text-danger">{error}</p>
            </Container>
        );
    }

    if (!ingredient) {
        return (
            <Container className="py-5 text-center">
                <p>Ингредиент не найден</p>
            </Container>
        );
    }
    const imageUrl = ingredient.image_url || placeholder;
    return (

        <Container className="py-5">
            <Breadcrumbs />
            <div className="row align-items-center mt-3 mb-5">
                <div className="col-md-6">
                    <img
                        src={imageUrl}
                        alt={ingredient.ingredient_name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="mb-5 fw-bold">{ingredient.ingredient_name}</h2>
                    <h3 className="fw-bold">{ingredient.price} ₽/{ingredient.unit}</h3>
                </div>
            </div>

            {/* Раздел с описанием */}
            <div className="text-start">
                <h3 className="fw-bold">Описание</h3>
                <hr className="mx-auto mb-4 divider" />
                <p className="mx-auto text-start recipe-card">
                    {ingredient.description}
                </p>
            </div>
        </Container>
    );
}

export default AboutIngredientPage;
