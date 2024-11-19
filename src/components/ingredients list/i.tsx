import { Col, Container, Row } from "react-bootstrap";
import IngredientCard from "../ingredient card/IngredientCard.tsx";
import { useEffect, useState } from "react";
import Search from "../search/Search";
import { api } from '../../modules/coffeApi.ts';
import Breadcrumbs from "../bread crumbs/BreadCrumbs.tsx";

function I() {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState(""); // Состояние для поиска

    useEffect(() => {
        const fetchIngredients = async () => {


            try {
                const data = await api.getIngredients(searchQuery); // Передаем строку поиска как параметр
                setIngredients(data.ingredients || []);
            } catch (err) {
                console.error(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchIngredients();
    }, [searchQuery]); // Зависимость от searchQuery

    return (
        <Container className="mb-5">

            <Search onSearch={setSearchQuery}/>
            <div className={'mt-3 mb-3'}>
                <Breadcrumbs/>
            </div>
            <Row className="g-4 justify-content-center">
                {loading ? (
                    <p>Загрузка...</p>
                ) : error ? (
                    <p>Ошибка: {error}</p>
                ) : ingredients.length > 0 ? (
                    ingredients.map((ingredient) => (
                        <Col
                            key={ingredient.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                            xl={4}
                            className="d-flex justify-content-center align-items-stretch"
                        >
                            <IngredientCard ingredient={ingredient}/>
                        </Col>
                    ))
                ) : (
                    <p>Ингредиенты не найдены</p>
                )}
            </Row>
        </Container>
    );
}

export default I;
