import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlcIMG from './images/blockvp.png';
import CardP from './images/vp.png';


const VitrinaProject: React.FC = () => {
    return (
        <main>
            <Header />
            <MainProject/>
            <Footer />
        </main>
    );
};


const MainProject = () => {
    return (

        <main>
            <section className="first_section_vp">
                <div className="h1_section"><h1>Витрина проектов</h1></div>
                <img src={BlcIMG} alt="фон" className="vp_center_img"/>
                <h2>Текстово-визуальный блок о витрине проектов (возможность правки, добавления элементов)</h2>
            </section>

            <section className="second_section_vz">
                <div className="h1_vp_section"><h1>Выставка проектов победителей Конкурса студенческих проектов ГУУ 2024г.</h1></div>
                <img src={CardP} alt="фон" className="vp_img"/>
                <h2>Карточка проекта 1</h2>
                <img src={CardP} alt="фон" className="vp_img"/>
                <h2>Карточка проекта 2</h2>
                <img src={CardP} alt="фон" className="vp_img"/>
                <h2>Карточка проекта 3</h2>

            </section>
        </main>
    );
};

export default VitrinaProject;
