import './recipes bag.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ShopImg from '../../assets/shopping-bag.svg'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
function RecipesBag() {
    const [cartCount] = useState(2);
    return (
        <div className={'shop'}>
            <Button  variant={'success'} className={'custom-button-shop'}
            as={Link as any} to={'/recipes'}
            >
                <img  src={ShopImg}  className={'w-100'} alt={'ShopImg'}></img>
                {cartCount > 0 && (
                    <div className="cart-badge">
                        {cartCount}
                    </div>
                )}
            </Button>
        </div>
    );
}

export default RecipesBag;
