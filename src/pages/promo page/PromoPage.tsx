import './promoPage.css';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import leftHandImg from '../../assets/promo/Group 2.svg';

function PromoPage() {
    return (
        <>
            <Container className="d-flex flex-column justify-content-center mb-5">
                {/* Левое изображение */}
                <div className="d-flex justify-content-center align-items-center text-center w-100">
                    <motion.div
                        className="left-hand-img-container"
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img src={leftHandImg} alt="Left Hand" />
                    </motion.div>
                </div>

                {/* Текст */}
                <div className="d-flex flex-row justify-content-start">
                    <div className="d-flex flex-column">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <h1 className="fw-bold text">Каждый день мы обжариваем кофе</h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <h3 className={"text-start"}>И бесплатно доставляем по всей России</h3>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default PromoPage;
