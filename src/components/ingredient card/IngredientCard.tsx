import './ingredientCard.css'
import {Button, Card} from "react-bootstrap";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import placeholder from '../../assets/Social Media Icons (Community)/camera.svg'

interface Ingredient {
    id: number;
    ingredient_name: string;
    description: string;
    price: number;
    unit: string;
    image_url: string;
}
function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
    return (
        <motion.div
            className="card-wrapper"
            whileHover={{ scale: 1.02 }} // Масштаб при наведении
            transition={{ type: "spring", stiffness: 300, damping: 15 }} // Плавный эффект
        >
            <Card className="card text-decoration-none" as={Link as any} to={`/ingredients/${ingredient.id}`}>
                <div className="justify-content-center text-center">
                    <Card.Img variant="top" src={ingredient.image_url as string || placeholder as string} className="w-75" />
                </div>
                <Card.Body>
                    <Card.Title
                        style={{ color: "#573821", fontSize: "16px", fontWeight: "bold" }}
                        className="mb-4"
                    >
                        {ingredient.ingredient_name}
                    </Card.Title>
                    <Card.Text className="mb-4">
                        <h6 className="text-multiline-truncate">
                            {ingredient.description}
                        </h6>
                    </Card.Text>
                    <div className="d-flex justify-content-between flex-row align-items-center">
                        <h6>{ingredient.price} ₽/ {ingredient.unit}</h6>
                        <Button
                            variant="success"
                            className="custom-button d-flex align-items-center gap-1"
                        >
                            Добавить
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default IngredientCard;