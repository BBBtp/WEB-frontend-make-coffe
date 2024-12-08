import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSearch } from "../../contexts/SearchContext";
import SearchImg from '../../assets/search.svg';
import './search.css'
function Search() {
    const { state, dispatch, SEARCH_ACTIONS } = useSearch();
    const [searchTerm, setSearchTerm] = useState(state.query); // Инициализируем из глобального состояния

    const handleSearch = () => {
        dispatch({ type: SEARCH_ACTIONS.SET_QUERY, payload: searchTerm }); // Обновляем глобальное состояние
    };

    return (
        <Container className="d-flex justify-content-start mt-3 mb-3 gap-2">
            <Form.Control
                type="text"
                placeholder="Поиск по каталогу..."
                className="search"
                value={searchTerm} // Локальное состояние
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch();
                    }
                }}
            />
            <Button
                variant="success"
                className="custom-button-shop"
                onClick={handleSearch}
            >
                <img src={SearchImg} className="w-100" alt="SearchImg" />
            </Button>
        </Container>
    );
}

export default Search;
