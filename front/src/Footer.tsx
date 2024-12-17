import React from 'react';
import './css/styles.css';


import tgImg from './images/tg.png';
import vkImg from './images/vk.png';


const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer_text">
                <div className="zag">
                    <h3>Контакты</h3>
                </div>
                <div className="data">
                    <h4>+7(999)999-99-99</h4>
                </div>
                <div className="data">
                    <h4>***@guu.ru</h4>
                </div>
                <div className="zag">
                    <h3>Адрес</h3>
                </div>
                <div className="data">
                    <h4>Рязанский пр-т,</h4>
                    <p>
                        <h4>Москва,109542</h4>
                    </p>
                </div>
                <div className="vopr">
                    <h3>Остались вопросы?</h3>
                </div>
            </div>
            <button className="main_button">
                <a href="#" className="button-text">
                    Задать вопрос
                </a>
            </button>
            <img src={tgImg} className="footer_img"  alt="тг"/>
            <img src={vkImg} alt="вк" className="footer_img" />
        </footer>
    );
};

export default Footer;