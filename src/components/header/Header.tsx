import './header.css'
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logoImg from '../../assets/coffee.svg'
import {Link, useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import UserImg from '../../assets/Social Media Icons (Community)/user.svg'
import MainImg from '../../assets/Social Media Icons (Community)/activity.svg'
import LogOutImg from '../../assets/Social Media Icons (Community)/log-out.svg'

function Header() {

    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
        >
            <Navbar expand="lg" className="d-flex justify-content-between sticky-header">
                <Container fluid className="d-flex justify-content-between px-5">
                    <Navbar.Brand as={Link} to={'/'}>

                        <motion.div
                            custom={1}
                            variants={logoAnimation}
                            className="logo-container">
                            <motion.img src={logoImg} alt="Logo" className="w-25"/>
                            <motion.div className="logo-text">
                                <motion.text>Чашка</motion.text>
                                <motion.text>Кофе</motion.text>
                            </motion.div>
                        </motion.div>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <div className="d-flex gap-2">

                        <>
                            <motion.div
                                custom={1}
                                variants={buttonAnimation}
                            >
                                <Button variant="success" className="custom-button d-flex align-items-center gap-1"
                                as={Link} to={'/ingredients'}
                                >
                                    Ингредиенты
                                </Button>
                            </motion.div>
                            {/*<motion.div*/}
                            {/*    custom={2}*/}
                            {/*    variants={buttonAnimation}>*/}
                            {/*    <Button variant="success" className="custom-button d-flex align-items-center gap-1"*/}
                            {/*    as={Link} to={'/recipes'}*/}
                            {/*    >*/}

                            {/*        Рецепты*/}
                            {/*    </Button>*/}
                            {/*</motion.div>*/}
                        </>
                    </div>
                </Container>
            </Navbar>
        </motion.div>
    )
}

export default Header

export const logoAnimation = {
    hidden: (custom) => ({
        opacity: 0,

    }),
    visible: {
        opacity: 1,

        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }
    }
};

export const buttonAnimation = {
    hidden: {
        opacity: 0,

    },
    visible: (custom) => ({
        opacity: 1,

        transition: {
            duration: 0.8,
            ease: "easeInOut",
            delay: custom * 0.2,
        }
    })
};
