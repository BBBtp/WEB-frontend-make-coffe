import './header.css';
import {Button, Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import logoImg from '../../assets/coffee.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <Navbar expand="lg" className="sticky-header" collapseOnSelect>
                <Container fluid className="d-flex justify-content-between px-3 px-md-5">
                    {/* Логотип */}
                    <Navbar.Brand as={Link as any} to={'/'}>
                        <motion.div custom={1} variants={logoAnimation} className="logo-container">
                            <motion.img src={logoImg} alt="Logo" className="logo-image" />
                            <motion.div className="logo-text">
                                <motion.text>Чашка</motion.text>
                                <motion.text>Кофе</motion.text>
                            </motion.div>
                        </motion.div>
                    </Navbar.Brand>

                    {/* Навигация для больших экранов */}
                    <Nav className="d-none d-lg-flex gap-3 justify-content-end align-items-center">
                        <Nav.Link as={Link as any} to="/ingredients" className="menu-item">
                            <Button variant={'success'} className={'custom-button'}>
                                Ингредиенты
                            </Button>
                        </Nav.Link>
                    </Nav>

                    {/* Кнопка для мобильных устройств */}
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={toggleMenu}
                        className="d-lg-none"
                    />

                    {/* Offcanvas меню для мобильных устройств */}
                    <Navbar.Offcanvas
                        id="responsive-navbar-nav"
                        aria-labelledby="responsive-navbar-nav"
                        placement="start"
                        className="full-screen-menu d-lg-none"
                        show={isMenuOpen}
                        onHide={closeMenu}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Меню
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-column gap-3 align-items-start">
                                <Nav.Link as={Link as any} to="/ingredients" className="menu-item" onClick={closeMenu}>
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
    hidden: () => ({
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
