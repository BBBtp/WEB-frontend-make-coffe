import './recipes page.css'
import {StrictMode} from "react";
import {Button, Container, Form} from "react-bootstrap";
import RecipeCard from "../../components/recipe card/RecipeCard.tsx";
import 'bootstrap-icons/font/bootstrap-icons.css';

function RecipesPage() {
    return(
        <StrictMode>
            <Container className={'d-flex justify-content-center mt-3 mb-4 gap-2'}>
                <Form.Control
                    type="text"
                    placeholder="Введите название рецепта"
                    className={'recipe'}
                />
                <Button variant={'success'} className={'custom-button-shop'}>
                    <i className="bi bi-check fs-3"></i>
                </Button>
            </Container>
            <RecipeCard />
            <RecipeCard />
            <Container className={'recipe-card d-flex justify-content-end mt-1'}>
                <h4 className={'fw-bold'}>Общая масса: 35 г</h4>
            </Container>
        </StrictMode>
    )
}

export default RecipesPage