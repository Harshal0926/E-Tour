import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
export default function App(){
    return(
     <div>
        <Header/>
        <br />
         <Outlet></Outlet>
         <br />
        <Footer/>
     </div>

    );

}