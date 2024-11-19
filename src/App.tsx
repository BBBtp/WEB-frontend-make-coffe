import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import PromoPage from "./pages/promo page/PromoPage.tsx";
import IngredientPage from "./pages/ingredient page/IngredientPage.tsx";
import RecipesPage from "./pages/recipes page/RecipesPage.tsx";
import AboutIngredientPage from "./pages/about ingredient page/AboutIngredientPage.tsx";
import Footer from "./components/footer/Footer.tsx";
import Breadcrumbs from "./components/bread crumbs/BreadCrumbs.tsx";

function App() {
    return(
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header/>

                <Routes>
                    <Route  path="/" element={<PromoPage />} />
                    <Route path="/ingredients" element={<IngredientPage/>}/>
                    {/*<Route path="/recipes" element={<RecipesPage/>}/>*/}
                    <Route path="/ingredients/:id" element={<AboutIngredientPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App