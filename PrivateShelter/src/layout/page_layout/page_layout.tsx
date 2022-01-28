import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsModal } from '../../store/modal/modal.selectors';
import { Header } from '../header';
import { Footer } from '../footer';
import { ModalWindow } from '../../components/modal_window';

import './page-layout.scss';

function PageLayout() {
    const isModal = useSelector(getIsModal);

    return (
        <>
            <Header />
            <main className="app-content">
                <Outlet />
            </main>
            <Footer />
            {isModal && <ModalWindow />}
        </>
    );
}

export default React.memo(PageLayout);
