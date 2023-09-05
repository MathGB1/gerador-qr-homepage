import React, { useState } from "react";
import "./Diario.css"; // Import the CSS file
import DiarioEntradas from "./DiarioEntradas"

function Diario() {
    // Define state to control whether the diary entries are visible or hidden
    const [showEntries, setShowEntries] = useState(false);

    return (
        <div className="project-diary" id="diario">
            <h1>Diário de Bordo</h1>
            <button onClick={() => setShowEntries(!showEntries)}>
                {showEntries ? "Esconder Diário" : "Mostrar Diário"}
            </button>
            {showEntries && (
                <table className="diary-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Informações</th>
                            <th>Extras</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DiarioEntradas.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.date}</td>
                                <td>{entry.information}</td>
                                <td>{entry.extra}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Diario;