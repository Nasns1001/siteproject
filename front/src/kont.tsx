import './css/styles.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import kontPhoto from "./images/kont_photo.png";
import kontInfo from "./images/kont_info.png";


const ContactPage: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionKont />
            <SecondSectionKont />
            <Footer />
        </main>
    );
};

const FirstSectionKont: React.FC = () => {
    return (
        <section className="first_section_kont">
            <div className="h1_section"><h1>Управление акселерационных программ и проектного обучения</h1></div>
            <img src={kontPhoto} alt="фон" className="kont_photo_img" />
            <img src={kontInfo} alt="фон" className="kont_info_img" />
        </section>
    );
};

const SecondSectionKont: React.FC = () => {
    return (
        <section className="second_section_kont">
            <SubSectionKont title="Центр проектного менторства" />
            <SubSectionKont title="Проектно-учебная лаборатория сквозных технологий цифровой экономики" />
            <SubSectionKont title="Проектно-учебная лаборатория городского развития" />
            <SubSectionKont title="Проектно-учебная лаборатория исследований и разработок в сфере цифровизации управления" />
            <SubSectionKont title="Бизнес-акселератор" />
            <SubSectionKont title="Бизнес-инкубатор" />
            <SubSectionKont title="Обучение служением" />
        </section>
    );
};

interface SubSectionKontProps {
    title: string;
}

const SubSectionKont: React.FC<SubSectionKontProps> = ({ title }) => {
    return (
        <section className="section_kont">
            <div className="h1_section"><h1>{title}</h1></div>
            <img src={kontPhoto} alt="фон" className="kont_photo_img" />
            <img src={kontInfo} alt="фон" className="kont_info_img" />
        </section>
    );
};

export default ContactPage;