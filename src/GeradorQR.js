import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './GeradorQR.css';

function GeradorQR() {
    const [link, setLink] = useState('');
    const [qrcodeLink, setQrcodeLink] = useState('');

    function handleGenerate(link_url) {
        QRCodeLink.toDataURL(link_url, {
            width: 300, /* Adjust the QR code width for a larger size */
            margin: 3,
        }, function (err, url) {
            setQrcodeLink(url);
        });
    }

    function handleQrcode(event) {
        const inputLink = event.target.value;
        setLink(inputLink);
        handleGenerate(inputLink);
    }

    return (
        <div className="geradorQR-container">
            <div className="geradorQR">
                <QRCode value={link} size={400} /> {/* Adjust the size of the QR code */}
                <input
                    className="inputQR"
                    placeholder="Insira seu texto"
                    value={link}
                    onChange={(event) => handleQrcode(event)}
                />
                <a href={qrcodeLink} download={`${link}.png`} className="botao-download">
                    Baixar QR Code
                </a>
            </div>
        </div>
    );
}

export default GeradorQR;