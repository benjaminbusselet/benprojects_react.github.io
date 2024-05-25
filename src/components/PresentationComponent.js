import React, { useState, useEffect } from "react";
import cv from '../assets/files/cv.pdf';

export default function Presentation() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleWindowResize);

        // Appeler handleWindowResize une fois au chargement du composant
        handleWindowResize();

        // Nettoyer l'écouteur d'événement lors de la suppression du composant
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section className="presentation">
            <div className="title">
                {!isMobile && (
                    <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                )}
                <h3 className="title_item">Développeur Web</h3>
            </div>
            <article>
                <h3>Après 10 ans dans la maintenance informatique, je me suis reconverti dans le développement web afin de mettre en pratique ma créativité.</h3>
                <h3 className="subtitle">Contacts</h3>
                <div className="contacts">
                    <div className="row">
                        <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
                        <span> 06 22 15 43 99</span>
                    </div>
                    <div className="row">
                        <i className="fas fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:benjamin.busselet@icloud.com"> benjamin.busselet@icloud.com</a>
                    </div>
                    <div className="row">
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                        <a href="http://linkedin.com/in/benjamin-busselet"> Profil Linkedin</a>
                    </div>
                    <div className="row">
                        <i className="fas fa-file-download" aria-hidden="true"></i>
                        <a href={cv} target="_blank" rel="noopener noreferrer">Téléchargez mon CV au format PDF</a>
                    </div>
                </div>
            </article>
        </section>
    );
}
