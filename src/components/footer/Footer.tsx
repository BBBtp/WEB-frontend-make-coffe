import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { motion } from 'framer-motion';
import tgIcon from '../../assets/Social Icons/tg icon.svg';
import vkIcon from '../../assets/Social Icons/vk icon.svg';
import gitIcon from '../../assets/Social Icons/git icon.svg';

function Footer() {
    return (
        <footer className="text-light">
            <Container className={"justify-content-between"}>
                <Row className="align-items-center text-center text-md-start">
                    {/* Блок с именем */}
                    <Col xs={12} md={6} className="mb-0 mb-md-0">
                        <h6 className="fw-bold text-light">Богдан Топорин</h6>
                    </Col>

                    {/* Блок с иконками */}
                    <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end gap-2">
                        <a href={'https://t.me/bbbbbbtp'} target="_blank" rel="noopener noreferrer">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={tgIcon}
                                alt="Tg"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <motion.img whileHover={{ scale: 1.05 }} src={vkIcon} alt="Vk" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <motion.img whileHover={{ scale: 1.05 }} src={gitIcon} alt="Git" />
                        </a>
                    </Col>
                </Row>

                {/* Текстовый блок */}
                <Row className="mt-1">
                    <Col className={'text-center text-down'}>
                      © 2024 Чашка кофе. Все права защищены.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
