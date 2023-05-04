import React from 'react';
import Home from '../Pages/Home/Home/Home';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
import ExtraSection from '../Pages/Home/Home/ExtraSection';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='m-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;