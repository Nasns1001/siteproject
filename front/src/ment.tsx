import "./css/styles.css"
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import ment1 from "./images/ment1.png";
import ment2 from "./images/ment2.png";
import ment3 from "./images/ment3.png";
import ment4 from "./images/ment4.png";
import mentrp from "./images/ment_pr.png";


const MentorshipPage: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionMent />
            <SecondSectionMent />
            <ThirdSectionMent />
            <Footer />
        </main>
    );
};

const FirstSectionMent: React.FC = () => {
    return (
        <section className="first_section_ment">
            <div className="h1_section"><h1>Проектный день</h1></div>
            <h1>Центр проектного менторства</h1>
            <h2>Менторы - представители партнера, которые напрямую работают с проектными командами студентов</h2>
        </section>
    );
};

const SecondSectionMent: React.FC = () => {
    return (
        <section className="second_section_ment">
            <img src={ment1} alt="иконка" className="ment_img" />
            <h2>Формирование HR-бренда и положительного имиджа организации у молодежи</h2>

            <img src={ment2} alt="иконка" className="ment_img" />
            <h2>Решение исследовательских и прикладных управленческих задач</h2>

            <img src={ment3} alt="иконка" className="ment_img" />
            <h2>Подбор и воспитание кадров</h2>

            <img src={ment4} alt="иконка" className="ment_img" />
            <h2>Развитие навыков наставничества у сотрудников организации-партнера</h2>
        </section>
    );
};

const ThirdSectionMent: React.FC = () => {
    return (
        <section className="third_section_ment">
            <h1>Наши менторы и эксперты</h1>
            <img src={mentrp} alt="поле" className="ment_img_pr" />
            <img src={mentrp} alt="поле" className="ment_img_pr" />
            <img src={mentrp} alt="поле" className="ment_img_pr" />
            <button className="main_button_ment">
                <a href="" className="button-text_ment">Стать ментором или экспертом</a>
            </button>
            <button className="main_button_ment">
                <a href="" className="button-text_ment">Оставить заявку на поиск ментора</a>
            </button>
        </section>
    );
};

export default MentorshipPage;