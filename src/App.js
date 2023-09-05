import './App.css';
import React, { Component } from 'react';
import Home from "./Home";
import HeaderMod from "./HeaderMod";
import FooterMod from "./FooterMod";
import SobreNos from "./SobreNos";
import SobreProjeto from "./SobreProjeto";
import Diario from "./Diario";

function App() {
    return (
        <div className="App">
            <HeaderMod></HeaderMod>
            <Home></Home>
            <SobreNos></SobreNos>
            <div className="ajuda-imagem"></div>
            <SobreProjeto></SobreProjeto>
            <Diario></Diario>
            <FooterMod></FooterMod>
        </div>
    );
}


export default App;
