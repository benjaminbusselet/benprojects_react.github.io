import React, { useState, useEffect } from "react";

export default function Autres() {
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
        <section className="autres">
            <div className="title">
                {!isMobile && (
                    <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                )}
                <h3>COMPÉTENCES - Autres</h3>
            </div>
            <article>
                <div className="item1">
                    <h3 className="subtitle">Gestion De Parc Informatique</h3>
                    <ul>
                        <li>diagnostiquer une panne</li>
                        <li>remplacer un matériel défectueux</li>
                        <li>tester les équipements</li>
                        <li>effectuer l’entretien des matériels</li>
                        <li>conseiller la clientèle</li>
                    </ul>
                </div>
                <div className="item2">
                    <h3 className="subtitle">Cours et Support Informatique</h3>
                    <ul>
                        <li>Animation de cours</li>
                        <li>Aide à l'utilisation des équipements informatiques</li>
                        <li>Soutien dans la pratique des systèmes et logiciels</li>
                    </ul>
                </div>
            </article>
        </section>
    );
}
