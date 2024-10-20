import React, { useState, useEffect } from "react";

export default function Hobbys() {
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
        <section className="hobbys">
            <div className="title">
                {!isMobile && (
                    <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                )}
                <h3>HOBBYS</h3>
            </div>
            <article>
                <div className="item1">
                    <i className="fas fa-music" title="Musique" aria-hidden="true"></i>
                    <span className="sr-only">Musique</span>
                    <span> Musique</span>
                </div>
                <div className="item2">
                    <i className="fas fa-tv" title="Séries" aria-hidden="true"></i>
                    <span className="sr-only">Séries</span>
                    <span> Séries</span>
                </div>
                <div className="item3">
                    <i className="fas fa-film" title="Films" aria-hidden="true"></i>
                    <span className="sr-only">Films</span>
                    <span> Films</span>
                </div>
                <div className="item4">
                    <i className="fas fa-running" title="Sport" aria-hidden="true"></i>
                    <span className="sr-only">Sport</span>
                    <span> Sport</span>
                </div>
                <div className="item5"></div>
            </article>
        </section>
    );
}
