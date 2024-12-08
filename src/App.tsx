import {Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import PromoPage from "./pages/promo page/PromoPage";
import IngredientPage from "./pages/ingredient page/IngredientPage";
import AboutIngredientPage from "./pages/about ingredient page/AboutIngredientPage";
import Footer from "./components/footer/Footer";
import {SearchProvider} from "./contexts/SearchContext";
import { invoke } from "@tauri-apps/api/core";
import {useEffect} from "react";
function App() {
    useEffect(()=>{
        invoke('tauri', {cmd:'create'})
            .then(() =>{console.log("Tauri launched")})
            .catch(() =>{console.log("Tauri not launched")})
        return () =>{
            invoke('tauri', {cmd:'close'})
                .then(() =>{console.log("Tauri launched")})
                .catch(() =>{console.log("Tauri not launched")})
        }
    }, [])
    return(
        <BrowserRouter basename={"/WEB-frontend-make-coffe"}>
            <div className="d-flex flex-column min-vh-100">
                <SearchProvider>
                <Header/>
                <Routes>
                    <Route  path="/" element={<PromoPage />} />
                    <Route path="/ingredients" element={<IngredientPage/>}/>
                    {/*<Route path="/recipes" element={<RecipesPage/>}/>*/}
                    <Route path="/ingredients/:id" element={<AboutIngredientPage/>}/>
                </Routes>
                <Footer/>
                </SearchProvider>
            </div>
        </BrowserRouter>
    )
}

export default App