import './recipe card.css';
import CoffeeImg from '../../assets/1.png'
import {Button, Col, Container, Row} from "react-bootstrap";
function RecipeCard() {
    return (
        <Container className="recipe-card container py-2 ">
            <Row className="align-items-center justify-content-center">
                {/* Изображение */}
                <Col className="col-2">
                    <img
                        src={CoffeeImg}
                        alt="Продукт"
                        className="img-fluid rounded"
                    />
                </Col>

                {/* Название продукта */}
                <Col className="col-3">
                    <h5 className="mb-0 fw-bold">Эфиопия Сидамо Бири Черека</h5>
                </Col>

                {/* Кнопки управления */}
                <Col className="col-3 d-flex align-items-center justify-content-end gap-3">
                    <Button variant={"success"} className="custom-button-shop">-</Button>
                    <Button variant={'success'} className="custom-button-shop">+</Button>
                </Col>
                <Col className="col-2 d-flex align-items-center justify-content-end gap-2">
                    <span className="fw-bold">250 г</span>
                </Col>
            </Row>
            <hr className="mx-auto mb-4 divider"/>
        </Container>
    );
}

export default RecipeCard;
