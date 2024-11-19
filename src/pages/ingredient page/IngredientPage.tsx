import {StrictMode, useState} from 'react'

import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import IngredientCard from "../../components/ingredient card/IngredientCard.tsx";
import {Col, Container, Row} from "react-bootstrap";
import I from "../../components/ingredients list/i.tsx";
import '../../components/ingredients list/i.css'
import RecipesBag from "../../components/recipes bag/Recipes Bag.tsx";
import Search from "../../components/search/Search.tsx";
import Breadcrumbs from "../../components/bread crumbs/BreadCrumbs.tsx";

function IngredientPage() {

    return (
        <div>
            {/*<RecipesBag />*/}
            <I/>
        </div>
    )
}

export default IngredientPage
