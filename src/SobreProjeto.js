import React from "react";
import "./SobreProjeto.css"; // Import the CSS file
import projeto1 from "./Projeto1.png";
import projeto2 from "./Projeto2.png";
import projeto3 from "./Projeto3.png";

function SobreProjeto() {
    return (
        <div>
            <section id="sobre-projeto" className="sobre_projeto">
                <div className="text-container">
                    <h1>Sobre o Projeto</h1>
                    <p>
                        Este site foi criado utilizando tecnologias web modernas, incluindo
                        HTML, CSS e React. A equipe de desenvolvimento dedicou tempo e
                        esforço para criar uma experiência interativa e informativa para os
                        usuários.
                    </p>
                    <p>
                        O HTML foi utilizado para estruturar o conteúdo do site, definindo
                        seções, cabeçalhos e parágrafos. O CSS foi aplicado para estilizar o
                        layout, as cores e as fontes, garantindo uma aparência atraente e
                        coesa.
                    </p>
                    <p>
                        React, uma biblioteca JavaScript de código aberto, desempenhou um
                        papel fundamental na construção deste site. Ele permitiu a criação de
                        componentes reutilizáveis e a manipulação eficiente do estado da
                        aplicação, além de lidar com o gerador de QR Code.
                    </p>
                    <p>
                        Além disso, processos de desenvolvimento, como controle de versão e
                        integração contínua, foram implementados para garantir a qualidade e
                        a entrega contínua de novos recursos.
                    </p>
                </div>
                <div className="image-container">
                    <div className="image-wrapper">
                        <img src={projeto1} alt="Projeto 1" className="image-1" />
                        <img src={projeto2} alt="Projeto 2" className="image-2" />
                    </div>
                    <img src={projeto3} alt="Projeto 3" className="image-3" />
                </div>
            </section>
        </div>
    );
}

export default SobreProjeto;