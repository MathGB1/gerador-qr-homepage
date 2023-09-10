import image1 from "./image1.png"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.png"
import image5 from "./image5.png"
import image6 from "./image6.jpg"
import image7 from "./image7.png"
import image8 from "./image8.png"
const DiarioEntradas = [
    {
        date: "05/03/2023",
        information: "Debate Inicial;",
        extra: "",
    },
    {
        date: "10/03/2023",
        information: "Debate sobre ideias;",
        extra: "",
    },
    {
        date: "13/03/2023",
        information: "Matheus: Finalização do curso Fundamentos de Lógica de Programação;",
        extra: "",
    },
    {
        date: "14/03/2023",
        information: "Matheus: Finalização do curso Linguagem de Programação Python - Básico;",
        extra: "",
    },
    {
        date: "17/03/2023",
        information: "Matheus: Finalização do curso Empreendedorismo e Inovação;",
        extra: "",
    },
    {
        date: "18/03/2023",
        information: "Confecção da estrutura do site com HTML e CSS;",
        extra: (<img className="diario-image" src={image5} alt="Image 1" />),
    },
    {
        date: "20/03/2023",
        information: "Confecção do gerador de QR Code;",
        extra: "",
    },
    {
        date: "22/03/2023",
        information: "Tentativa de integração entre site e gerador de QR Code;",
        extra: "",
    },
    {
        date: "29/03/2023",
        information: "Sucesso na  integração entre site e gerador de QR Code;",
        extra: (<img className="diario-image" src={image1} alt="Image 2" />),
    },
    {
        date: "22/04/2023",
        information: (<div><p><strong>Atividade em Campo:</strong> Visita à floricultura A Varanda para consulta com funcionários sobre funcionalidades esperadas de um software de catalogação que poderiam auxiliá-los, para que possamos avaliar sua viabilidade no projeto; realização de pesquisa e anotações sobre plantas domésticas e seus cuidados essenciais;</p>
        </div>),
        extra: (<div>
                    <img className="diario-image"src={image2} alt="Image 3" />
                    <p>Exemplos de flores decorativas domésticas de ambiente ensolarado;</p>
                    <img className="diario-image"src={image6} alt="Image 4" />
                    <p>Realização de anotações sobre características e cuidados essenciais;</p>
                    <img className="diario-image"src={image3} alt="Image 5" />
                    <p>Foto com a entrevistada, funcionária Viviane, que deu dicas para informações que podem estar no aplicativo;</p>
                </div>),
    },
    {
        date: "23/04/2023",
        information: "Lucas: Finalização do curso Fundamentos de Lógica de Programação;",
        extra: "",
    },
    {
        date: "26/04/2023",
        information: (<div><p><strong>Atividade em Campo:</strong> Reunião com os estagiários responsáveis pelo viveiro didático e biotério da CUFSA, e visita com a bióloga Marcia Teixeira com o objetivo de avaliar a viabilidade de situar QR Codes para fornecer informações relevantes aos visitantes, referente às plantas e animais que ali residem;</p></div>),
        extra: (<div>
                    <img className="diario-image"src={image4} alt="Image 6" />
                    <img className="diario-image"src={image7} alt="Image 7" />
                </div>),
    },
    {
        date: "27/04/2023",
        information: "Lucas: Finalização do curso Empreendedorismo e Inovação;",
        extra: "",
    },
    {
        date: "29/04/2023",
        information: "Lucas: Finalização do curso Linguagem de Programação Python - Básico;",
        extra: "",
    },
    {
        date: "01/09/2023",
        information: "Debate sobre redesign do estilo e código do site;",
        extra: "",
    },
    {
        date: "02/09/2023",
        information: "Desenvolvimento do novo design do site;",
        extra: "",
    },
    {
        date: "05/09/2023",
        information: "Publicar site gerador de QR Codes;",
        extra: (<div>
            <img className="diario-image" src={image8} alt="Image 8" />
        </div>),
    },
    {
        date: "06/09/2023",
        information: "Desenvolvimento de um design responsivo para mobile;",
        extra: "",
    },
    // Add more entries as needed
];

export default DiarioEntradas;