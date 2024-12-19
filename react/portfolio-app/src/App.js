import React from 'react';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Contanier from './components/contents/Contanier.jsx';
import './css/style.css';

export default function App() {
    return (
            <div>
                <Header></Header>
                <Contanier />
                <Footer></Footer>
            </div>
    );
}

