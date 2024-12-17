import React from 'react';
import './css/styles.css'; // Импортируем стили

import logoImg from './images/loggo.png';

const Header = () => {
        return (
            <>
                <header className="header">

                    <img src={logoImg} alt=" Логотип" className=" logo_img" />
                    <nav>
                        <ul>
                            <li className=" ob">
                                <a href="OPO.tsx">О проектном обучении
                                </a>
                            </li>
                            <li className="day">
                                <a href="proectday.tsx">Проектный день</a>
                            </li>
                            <li className="ment">
                                <a href="ment.tsx">Менторство и экспертиза</a>
                            </li>
                            <li className="sreda">
                                <a href="sreda.tsx">Цифровая среда</a>
                            </li>
                            <li className="kont">
                                <a href="kont.tsx">Контакты</a>
                            </li>
                            <li className="fip">
                                <a href="fip.tsx">ФИП</a>
                            </li>
                        </ul>
                    </nav>
                </header>

        </>
    );
};
            export default Header;