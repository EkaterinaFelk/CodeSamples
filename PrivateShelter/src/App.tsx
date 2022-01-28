import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageLayout } from './layout/page_layout';

import { HomePage } from './pages/home';
import { ShelterPage } from './pages/shelter';
import { NotFound } from './pages/not_found';
import PATHS from './core/constants/paths';

import './styles/main.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path={PATHS.home} element={<HomePage />} />
                    <Route path={PATHS.shelter} element={<ShelterPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
