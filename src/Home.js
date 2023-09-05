import GeradorQR from "./GeradorQR";
import React from "react";
import "./Home.css"; // Make sure to link your CSS file

function Home() {
    return (
        <div className="home-container">
            <section id="gerador" className="home-left">
                {/* Content for the left side */}
                <h1 className="home-heading">
                    Bem-Vindo ao Nosso Projeto Gerador de QR-Codes
                </h1>
                <p className="home-paragraph">
                    Utilize uma maneira de compartilhar informações de forma rápida e
                    eficaz com o nosso gerador de QR-Code.
                </p>
                <p className="home-paragraph">
                    Insira seu texto no campo abaixo do QR-Code para gerá-lo dinamicamente
                    e, em seguida, clique no botão para fazer o download.
                </p>
                <p className="home-paragraph">
                    Se você tiver interesse, convidamos você a explorar as outras seções
                    do projeto.
                </p>
            </section>
            <section className="home-right">
                <GeradorQR></GeradorQR>
            </section>
        </div>
    );
}

export default Home;