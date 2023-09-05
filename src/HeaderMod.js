import React from "react";
import './HeaderMod.css';

function HeaderMod() {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="cabecalho">
			<nav className="cabecalho__menu">
				<button
					className="cabecalho__menu__link1"
					onClick={() => scrollToSection("gerador")}
				>
					Gerador
				</button>
				<button
					className="cabecalho__menu__link2"
					onClick={() => scrollToSection("sobre-nos")}
				>
					Sobre Nós
				</button>
				<button
					className="cabecalho__menu__link3"
					onClick={() => scrollToSection("sobre-projeto")}
				>
					Projeto
				</button>
				<button
					className="cabecalho__menu__link4"
					onClick={() => scrollToSection("diario")}
				>
					Diário
				</button>
			</nav>
		</header>
	);
}
export default HeaderMod;
