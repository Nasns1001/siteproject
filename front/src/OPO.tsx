import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/styles.css';
import OPO from "./images/OPO.png";
import OPOpr from "./images/OPOpr.png";
import OPO1 from "./images/OPO1.png";
import OPO2 from "./images/OPO2.png";
import OPO3 from "./images/OPO3.png";
import OPO4 from "./images/OPO4.png";

const MainSectionOPO: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionOpo />
            <SecondSectionOpo />
            <ThirdSectionOpo />
            <Footer />
        </main>
    );
};

const FirstSectionOpo: React.FC = () => {
    return (
        <section className="first_section_opo">
            <div className="h1_section"><h1>О проектном обучении</h1></div>
            <h1>Проектное обучение как технологическое решение практической подготовки</h1>
            <h2>Проектное обучение как комплексное технологическое решение практической подготовки студентов, удовлетворяющих требованиям федерального проекта «Кадры для цифровой экономики»</h2>
            <img src={OPO} alt="Схема" className="section_opo_img" />
        </section>
    );
};

const SecondSectionOpo: React.FC = () => {
    return (
        <section className="second_section_opo">
            <div className="h1_section"><h1>Задачи проектного обучения</h1></div>
            <div className="opo_img">
                <img src={OPOpr} alt="фон" className="pr_opo_img"/>
                <img src={OPO1} alt="цифра" className="c_opo_img"/>

                <img src={OPOpr} alt="фон" className="pr_opo_img"/>
                <img src={OPO2} alt="цифра" className="c_opo_img"/>

                <img src={OPOpr} alt="фон" className="pr_opo_img"/>
                <img src={OPO3} alt="цифра" className="c_opo_img"/>

                <img src={OPOpr} alt="фон" className="pr_opo_img"/>
                <img src={OPO4} alt="цифра" className="c_opo_img"/>
            </div>

            <h2>Формирование навыков командной работы и выстраивание системы взаимодействий </h2>
            <h2>Профессиональная социализация, формирование социально-ответственного поведения</h2>
            <h2>Создание основы для развития профессиональных и личностных навыков</h2>
            <h2>Достижение синергии знаний и навыков в ходе реализации поставленной цели при выполнении проектной работы</h2>
        </section>
    );
};

const ThirdSectionOpo: React.FC = () => {
    return (
        <section className="third_section_opo">
            <div className="h1_section"><h1>Проектное обучение: образовательный процесс</h1></div>
            <ul className="ul_opo">
                <li>проектная работа является неотъемлемой частью образовательного процесса</li>
                <li>дисциплины ориентированы на разработку проектов в рамках проектного обучения</li>
                <li>дифференцированный зачет по проектной работе в каждом семестре</li>
                <li>рейтинг эффективности работы ППС включает показатели эффективности по проектной работе</li>
                <li>положение о защите ВКР допускает защиту совместных ВКР</li>
                <li>выделен проектный день в расписании занятий</li>
            </ul>
        </section>
    );
};

export default MainSectionOPO;