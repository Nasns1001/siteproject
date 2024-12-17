import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import PRsreda1 from "./images/sreda_pr1.png";
import PRsreda2 from "./images/sreda_pr2.png";

const DigitalPlatformPage: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionSreda />
            <SecondSectionSreda />
            <Footer />
        </main>
    );
};

const FirstSectionSreda: React.FC = () => {
    return (
        <section className="first_section_sreda">
            <div className="h1_section"><h1>Цифровая платформа проектного обучения</h1></div>
            <img src={PRsreda1} alt="фон" className="sreda_center_img" />
            <h2>Текстово-визуальный блок о цифровизации проектного обучения (возможность правки, добавления элементов)</h2>
        </section>
    );
};

const SecondSectionSreda: React.FC = () => {
    return (
        <section className="second_section_sreda">
            <img src={PRsreda2} alt="фон" className="sreda_right_img" />
            <h1>Библиотека</h1>

            <button className="sreda_button">
                <a href="" className="button-text_sreda">Положение о проектном обучении</a>
            </button>

            <button className="sreda_button">
                <a href="" className="button-text_sreda">Ссылка инструкции для БЧ</a>
            </button>

            <button className="sreda_button">
                <a href="" className="button-text_sreda">Ссылка 3</a>
            </button>

            <button className="sreda_button">
                <a href="" className="button-text_sreda">Ссылка 4</a>
            </button>
        </section>
    );
};

export default DigitalPlatformPage;