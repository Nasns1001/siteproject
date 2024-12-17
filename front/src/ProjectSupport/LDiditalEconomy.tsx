import React from 'react';

import MainBl from '../images/infoblock.png';
import Header from '../Header';
import Footer from '../Footer';
import SupportPO from "./ProjectSupport";
import "../css/styles.css";



const LDiditalEconomy: React.FC = () => {
    return (
        <main>
            <Header />
            <SupportPO/>
            <MainLDiditalEconomy/>
            <Footer />
        </main>
    );
};

const MainLDiditalEconomy = () => {
    return (
        <main>
            <div className="h1_section_ps"><h1></h1></div>
            <img src={MainBl} alt="фон" className="general_ps_img"/>
        </main>
    )
}

export default LDiditalEconomy;