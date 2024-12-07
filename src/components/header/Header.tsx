import './header.css';
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react'; // Импортируем useState
import logoImg from '../../assets/coffee.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления меню

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Переключение состояния

    const closeMenu = () => setIsMenuOpen(false); // Закрытие меню

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <Navbar expand="lg" className="sticky-header" collapseOnSelect>
                <Container fluid className="d-flex justify-content-between px-3 px-md-5">
                    {/* Логотип */}
                    <Navbar.Brand as={Link} to={'/'}>
                        <motion.div custom={1} variants={logoAnimation} className="logo-container">
                            <motion.img src={logoImg} alt="Logo" className="logo-image" />
                            <motion.div className="logo-text">
                                <motion.text>Чашка</motion.text>
                                <motion.text>Кофе</motion.text>
                            </motion.div>
                        </motion.div>
                    </Navbar.Brand>

                    {/* Кнопка для коллапса */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu} />

                    {/* Offcanvas - полное перекрытие */}
                    <Navbar.Offcanvas
                        id="responsive-navbar-nav"
                        aria-labelledby="responsive-navbar-nav"
                        placement="start" // Меню будет выезжать слева
                        className="full-screen-menu"
                        show={isMenuOpen} // Управляем видимостью через состояние
                        onHide={closeMenu} // Закрытие при клике на фон
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Меню
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column gap-3 align-items-start">
                                {/* Кликаем и закрываем меню */}
                                <Nav.Link as={Link} to="/ingredients" className="menu-item" onClick={closeMenu}>
                                    Ингредиенты
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </motion.div>
    );
}

export default Header;

export const logoAnimation = {
    hidden: (custom) => ({
        opacity: 0,
    }),
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};
