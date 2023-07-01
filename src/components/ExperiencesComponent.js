import React, { useState, useEffect } from "react";

export default function Experiences() {
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
        <section className="experiences">
            <div className="title">
                {!isMobile && (
                    <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                )}
                <h3>EXPÉRIENCES PROFESSIONNELLES</h3>
            </div>
            <article>
                <div className="item1">
                    <small>Depuis 2022</small>
                    <h4 className="subtitle">Smart Global Governance</h4>
                    <p>Intégrateur</p>
                </div>
                <div className="item2">
                    <small>2020-2022</small>
                    <h4 className="subtitle">Auto-Entrepreneur</h4>
                    <p>Créateur de site Web</p>
                </div>
                <div className="item3">
                    <small>2015-2017</small>
                    <h4 className="subtitle">Teledom Sécurité</h4>
                    <p>Technicien Support Informatique</p>
                </div>
                <div className="item4">
                    <small>2007-2013</small>
                    <h4 className="subtitle">Education Nationale (Collèges)</h4>
                    <p>Gestion Du Parc Informatique</p>
                </div>
                <div className="item5">
                    <small>2004-2007</small>
                    <h4 className="subtitle">Auto-Entrepreneur</h4>
                    <p>Formation et Maintenance</p>
                </div>
                <div className="item6">
                    <small>2001-2003</small>
                    <h4 className="subtitle">Extreme Agency</h4>
                    <p>Gestion Du Parc Informatique</p>
                </div>
            </article>
        </section>
    );
}
