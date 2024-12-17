import React from 'react';

import PGImg from './images/PG.png';
import Header from "./Header";
import Footer from "./Footer";
import SupportPO from "./ProjectSupport/ProjectSupport";
import Navbar from "./Navbar";

const NewsAndAnons: React.FC = () => {
    return (
        <main>
            <Header />
            <Navbar/>
            <MainComponent/>
            <SupportPO/>
            <Footer />
        </main>
    );
};


    const newsData = [
        {
            title: 'Новость 1',
            description: 'Описание новости 1',
            imageUrl: '/path/to/image1.jpg',
        },
        {
            title: 'Новость 2',
            description: 'Описание новости 2',
            imageUrl: '/path/to/image2.jpg',
        },
        {
            title: 'Новость 3',
            description: 'Описание новости 3',
            imageUrl: '/path/to/image3.jpg',
        },
    ];

    const anonsData = [
        {
            title: 'Анонс 1',
            description: 'Описание анонса 1',
            imageUrl: '/path/to/image4.jpg',
        },
        {
            title: 'Анонс 2',
            description: 'Описание анонса 2',
            imageUrl: '/path/to/image5.jpg',
        },
        {
            title: 'Анонс 3',
            description: 'Описание анонса 3',
            imageUrl: '/path/to/image6.jpg',
        },
    ];

    const MainComponent: React.FC = () => {
        return (
            <main className='main'>
                <section className='high_section'>
                    <h1 className='high_text'>
                        <a href='VitrinaZakazov.tsx'>Витрина заказов</a>
                    </h1>
                    <h1 className='high_text'>
                        <a href='VitrinaProject.tsx'>Витрина проектов</a>
                    </h1>
                </section>

                <section className='main_section'>
                    <h1 className='main_text'>Новости</h1>
                    {newsData.map((item, index) => (
                        <article key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <img src={PGImg} alt={item.title} className='section_img' />
                        </article>
                    ))}
                    <h1 className='main_text'>Анонсы</h1>
                    {anonsData.map((item, index) => (
                        <article key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <img src={PGImg} alt={item.title} className='section_img' />
                        </article>
                    ))}
                </section>
            </main>
        );
    };

    export default NewsAndAnons;