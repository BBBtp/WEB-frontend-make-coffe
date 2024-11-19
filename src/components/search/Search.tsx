import './search.css';
import { Button, Container, Form } from "react-bootstrap";
import SearchImg from '../../assets/search.svg';
import { useState } from 'react'; // Импортируем useState

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState(''); // Локальное состояние для текста поиска

    const handleSearch = (e) => {
        setSearchTerm(e.target.value); // Сохраняем значение поля поиска
    };

    const handleSubmit = () => {
        onSearch(searchTerm); // Передаём значение после нажатия кнопки
    };

    return (
        <Container className="d-flex justify-content-start mt-3 mb-3 gap-2">
            <Form.Control
                type="text"
                placeholder="Поиск по каталогу..."
                className="search"
                value={searchTerm} // Управляем значением поля
                onChange={handleSearch} // Обновляем состояние при изменении текста
            />
            <Button
                variant="success"
                className="custom-button-shop"
                onClick={handleSubmit} // Фильтрация будет происходить только по клику на кнопку
            >
                <img src={SearchImg} className="w-100" alt="SearchImg" />
            </Button>
        </Container>
    );
}

export default Search;
