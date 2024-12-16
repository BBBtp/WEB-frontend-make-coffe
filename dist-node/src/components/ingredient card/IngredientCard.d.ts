import './ingredientCard.css';
interface Ingredient {
    id: number;
    ingredient_name: string;
    description: string;
    price: number;
    unit: string;
    image_url: string;
}
declare function IngredientCard({ ingredient }: {
    ingredient: Ingredient;
}): import("react").JSX.Element;
export default IngredientCard;
//# sourceMappingURL=IngredientCard.d.ts.map