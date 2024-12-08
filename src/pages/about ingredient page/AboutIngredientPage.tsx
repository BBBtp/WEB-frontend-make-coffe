import './about ingredient page.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../modules/coffeApi';
import { Container, Spinner } from "react-bootstrap";
import Breadcrumbs from "../../components/bread crumbs/BreadCrumbs";
import placeholder from '../../assets/Social Media Icons (Community)/camera.svg'

type Ingredient = {
    ingredient_name: string;
    image_url: string;
    price: number;
    unit: string;
    description: string;
};
function AboutIngredientPage() {
    const { id } = useParams();
    const [ingredient, setIngredient] = useState<Ingredient | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIngredient = async () => {
            if (!id) {
                setError("Ингредиент не найден");
                setLoading(false);
                return;
            }
            try {
                const data = await api.getIngredient(id);
                setIngredient(data);
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
                <div className="col-md-6  mt-3">
                    <h2 className="mb-3 fw-bold ">{ingredient.ingredient_name}</h2>
                    <div className="price-badge">
                        <h5 className="fw-medium text-white mb-0">{ingredient.price} ₽/{ingredient.unit}</h5>
                    </div>
                </div>
            </div>

            {/* Раздел с описанием */}
            <div className="justify-content-start">
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
