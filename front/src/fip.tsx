import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import FipBl from "./images/fipblock.png";
import Fippr from "./images/fippr.png";
import LineFip from "./images/linefip.png";
import StrelkaFip from "./images/strelka.png";

const FIPPage: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionFIP />
            <SecondSectionFIP />
            <ThirdSectionFIP />
            <Footer />
        </main>
    );
};

const FirstSectionFIP: React.FC = () => {
    return (
        <section className="first_section_fip">
            <div className="h1_section"><h1>Федеральная инновационная программа</h1></div>
            <img src={FipBl} alt="фон" className="fip_center_img" />
            <h2>Текстово-визуальный блок о ФИП (возможность правки, добавления элементов)</h2>
        </section>
    );
};

const SecondSectionFIP: React.FC = () => {
    return (
        <section className="second_section_fip">
            <div className="h1_section_fip"><h1>Новости и анонсы ФИП</h1></div>
            <img src={Fippr} alt="новости" className="fip_news_img" />
            <img src={Fippr} alt="новости" className="fip_news_img" />
            <img src={Fippr} alt="новости" className="fip_news_img" />
            <img src={Fippr} alt="новости" className="fip_news_img" />
        </section>
    );
};

const ThirdSectionFIP: React.FC = () => {
    return (
        <section className="third_section_fip">
            <div className="h2_section_fip"><h2>Справочная информация:</h2></div>
            <img src={LineFip} alt="новости" className="fip_l_img" />
            <div className="h3_section_fip">
                <h3>Проектно-методическое объединение «Ассоциация проектно-ориентированных организаций науки и высшего образования»</h3>
            </div>

            <img src={LineFip} alt="новости" className="fip_l_img" />
            <img src={StrelkaFip} alt="новости" className="fip_s_img" />
            <div className="h3_section_fip"><h3>Члены и партнеры</h3></div>

            <img src={LineFip} alt="новости" className="fip_l_img" />
            <img src={StrelkaFip} alt="новости" className="fip_s_img" />
            <div className="h3_section_fip"><h3>Ссылка 3</h3></div>

            <img src={LineFip} alt="новости" className="fip_l_img" />
        </section>
    );
};

export default FIPPage;