import { Col, Container, Row } from "react-bootstrap";
import IngredientCard from "../ingredient card/IngredientCard";
import { useEffect } from "react";
import { useSearch } from "../../contexts/SearchContext";
import Breadcrumbs from "../bread crumbs/BreadCrumbs";
import { api } from "../../modules/coffeApi";
import Search from "../search/Search";

function I() {
    const { state, dispatch, SEARCH_ACTIONS } = useSearch();

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const data = await api.getIngredients(state.query); // Используем запрос из глобального состояния
                dispatch({ type: SEARCH_ACTIONS.SET_RESULTS, payload: data.ingredients || [] });
            } catch (err) {
                console.error(err);

                // Проверяем, является ли ошибка объектом с сообщением
                if (err instanceof Error) {
                    dispatch({ type: SEARCH_ACTIONS.SET_ERROR, payload: err.message });
                } else {
                    dispatch({ type: SEARCH_ACTIONS.SET_ERROR, payload: "Неизвестная ошибка" });
                }
            }
        };

        fetchIngredients();
    }, [state.query, dispatch]);

    return (
        <Container className="mb-5">
            <Search />
            <div className={'mt-3 mb-3'}>
                <Breadcrumbs />
            </div>
            <Row className="g-4 justify-content-center">
                {state.results.length > 0 ? (
                    state.results.map((ingredient) => (
                        <Col
                            key={ingredient.id}
                            xs={12}
                            sm={8}
                            md={5}
                            lg={5}
                            xl={4}
                            className="d-flex justify-content-center align-items-stretch"
                        >
                            <IngredientCard ingredient={ingredient} />
                        </Col>
                    ))
                ) : (
                    <p>{state.error || "Ингредиенты не найдены"}</p>
                )}
            </Row>
        </Container>
    );
}

export default I;
