import React from 'react';
import supportPOImg from '../images/SupportPO.png';
import "../css/styles.css";

const SupportPO: React.FC = () => {
    const links = [
        { href: 'ProjectOffice.tsx', text: 'Проектный офис' },
        { href: 'MentCenter.tsx', text: 'Центр проектного менторства' },
        { href: 'LDiditalEconomy.tsx', text: 'Проектно-учебная лаборатория сквозных технологий цифровой экономики' },
        { href: 'LGorRazv.tsx', text: 'Проектно-учебная лаборатория городского развития' },
        { href: 'LIsslDigitalUpr.tsx', text: 'Проектно-учебная лаборатория исследований и разработок в сфере цифровизации управления' },
        { href: 'BisnessA.tsx', text: 'Бизнес-акселератор' },
        { href: 'BisnessIn.tsx', text: 'Бизнес-инкубатор' },
        { href: 'ObuchSluz.tsx', text: 'Обучение служением' },
    ];

    return (
        <main className="main">
            <section className="main_right">
                <img
                    src={supportPOImg}
                    alt="Подложка"
                    className="high_img"
                />
                <h1>Поддержка проектного обучения</h1>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default SupportPO;