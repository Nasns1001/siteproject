import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlIMG from './images/blockvz.png';
import CardZ from './images/prVZ.png';



const VitrinaZakazov: React.FC = () => {
    return (
        <main>
            <Header />
            <MainZakaz/>
            <Footer />
        </main>
    );
};


const MainZakaz = () => {
    return (

        <main>
            <section className="first_section_vz">
                <div className="h1_section"><h1>Витрина заказов</h1></div>
                <img src={BlIMG} alt="фон" className="vz_center_img"/>
                <h2>Текстово-визуальный блок с небольшими инструкциями, как оставить или
                    взять заказ (возможность правки, добавления элементов)</h2>
            </section>

            <section className="second_section_vz">
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 1</h2>
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 2</h2>
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 3</h2>
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 4</h2>
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 5</h2>
                <img src={CardZ} alt="фон" className="vz_img"/>
                <h2>Карточка заказа 6</h2>

                <button className="vz_button">
                    <a href="#" className="button-text_vz">Заказать проект</a>
                </button>
            </section>
        </main>
    );
};

export default VitrinaZakazov;