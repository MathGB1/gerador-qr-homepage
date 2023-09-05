import React from "react";
import "./SobreNos.css"; // Import the CSS file
import fsaImage from "./FSA.jpg"

function SobreNos() {
    return (
        <div>
            <section id="sobre-nos" className="sobre_nos">
<div>
                <h1>Sobre Nós</h1>
                <p>
                    Olá! Somos Alunos do Centro Universitário Fundação Santo André e
                    este é um projeto dedicado à criação de um gerador de QR Codes funcional,
                    simplificando o compartilhamento de informações de forma eficiente e prática.
                </p>
                <p>
                    O nosso projeto tem como objetivo simplificar a maneira como as
                    pessoas compartilham informações importantes e relevantes. Através do
                    nosso gerador de QR Code, você pode criar códigos que, quando
                    digitalizados, fornecem instantaneamente informações úteis, links,
                    contatos e muito mais.
                </p>
                <p>
                    Nossa equipe é composta pelos estudantes Alisson, Lucas e Matheus do curso de Sistemas de Informação. 
                    Trabalhamos juntos para criar uma solução que
                    atenda às necessidades de pessoas e empresas, tornando o
                    compartilhamento de informações mais eficiente e acessível.
                    </p>
                </div>
                <div className="image-container2">
                    <img src={fsaImage} alt="FSA" />
                </div>
            </section>
        </div>
    );
}

export default SobreNos;
