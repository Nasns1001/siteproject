import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalPlatformPage from './sreda';
import ProjectDayPage from './proectday';
import MainSectionOPO from './OPO';
import MentorshipPage from './ment';
import ContactPage from './kont';
import FIPPage from './fip';

import VitrinaProject from './VitrinaProject';
import VitrinaZakazov from "./VitrinaZakazov";

function Navbar() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DigitalPlatformPage />} />
                <Route path="/" element={<ProjectDayPage />} />
                <Route path="/" element={<ContactPage />} />
                <Route path="/" element={<MainSectionOPO />} />
                <Route path="/" element={<MentorshipPage />} />
                <Route path="/" element={<ContactPage />} />
                <Route path="/" element={<FIPPage />} />
                <Route path="/" element={<VitrinaProject />} />
                <Route path="/" element={<VitrinaZakazov />} />
            </Routes>
        </Router>
    );
}

export default Navbar;
