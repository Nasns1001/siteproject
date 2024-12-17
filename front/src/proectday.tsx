import './css/styles.css'; // Импортируем стили
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import ME from "./images/makeevents.png";

const ProjectDayPage: React.FC = () => {
    return (
        <main>
            <Header />
            <FirstSectionPd />
            <SecondSectionPd />
            <img src={ME} alt="лого" className="pr_d_img" />
            <Footer />
        </main>
    );
};

const FirstSectionPd: React.FC = () => {
    return (
        <section className="first_section_pd">
            <div className="h1_section"><h1>Проектный день</h1></div>
            <h1>В рамках проектного дня проводятся:</h1>
            <ul className="ul_pd">
                <li>открытые лекции внешних спикеров</li>
                <li>бизнес-завтраки с потенциальными менторами и экспертами</li>
                <li>бизнес-завтраки с потенциальными инвесторами</li>
                <li>экспертные и питч-сессии, демо-дни</li>
                <li>выездные целевые мероприятия, ориентированные на разработку проекта</li>
            </ul>
        </section>
    );
};

type ClubData = {
    clubName: string;
    leader: string;
};

const clubsData: ClubData[] = [
    {
        clubName: 'Коммуникационный клуб поддержки проектных команд для 1 и 2 курса',
        leader: 'Илларионова Екатерина Сергеевна'
    },
    {
        clubName: 'Клуб Наставничества и карьерного роста',
        leader: 'Кутузова Наталья Александровна'
    },
    {
        clubName: 'Клуб «Прикладного моделирования и анализа данных», 3 курс',
        leader: 'Путилов Кирилл Сергеевич'
    }
];

const SecondSectionPd: React.FC = () => {
    return (
        <section className="second_section_pd">
            <h1>Клубы по проектному обучению</h1>
            <table>
                <thead>
                <tr>
                    <th>Название клуба поддержки проектного обучения</th>
                    <th>Руководитель клуба</th>
                    <th>...</th>
                </tr>
                </thead>
                <tbody>
                {clubsData.map((club, index) => (
                    <tr key={index}>
                        <td>{club.clubName}</td>
                        <td>{club.leader}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button className="button_pd">
                <a href="" className="button-text_pd">Показать больше клубов</a>
            </button>
        </section>
    );
};

export default ProjectDayPage;