import {Container} from 'react-bootstrap';
import './footer.css'
import {motion} from "framer-motion";
import tgIcon from '../../assets/Social Icons/tg icon.svg'
import vkIcon from '../../assets/Social Icons/vk icon.svg'
import gitIcon from '../../assets/Social Icons/git icon.svg'
function Footer() {
    return (
        <footer className="text-light py-4">
            <div className={'d-flex justify-content-between align-items-center'}>
                    <div
                    ><h6 className={'fw-bold text-light'}>Богдан
                        Топорин</h6></div>

                <div className={'d-flex gap-2'}>
                    <a href={'https://t.me/bbbbbbtp'} target="_blank" rel="noopener noreferrer">
                        <motion.img
                            whileHover={{scale: 1.05}}
                            src={tgIcon}
                            alt="Tg"

                        />
                    </a>
                    <motion.img whileHover={{scale: 1.05}} src={vkIcon} alt={'Vk'}/>
                    <motion.img whileHover={{scale: 1.05}} src={gitIcon} alt={'Git'}/>
                </div>
            </div>
            <Container className="text-center ">
                <div>
                    © 2024 Чашка кофе. Все права защищены.
                </div>

            </Container>
        </footer>
    );
}

export default Footer;
