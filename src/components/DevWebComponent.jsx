import React, { useState, useEffect } from "react";

export default function DevWeb() {
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
        <section className="devweb">
            <div className="title">
                {!isMobile && (
                    <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                )}
                <h3 className="title_item">Développeur Web</h3>
            </div>
            <article>
                <div className="languages_grid">
                    <table className="front">
                        <tr>
                            <th colSpan="2">
                                <h3 className="table_title">Langages Front-End</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Bootstrap</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Javascript</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>Jquery</td>
                            <td>⭐️⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>NextJS</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                    </table>
                    <table className="back">
                        <tr>
                            <th colSpan="2">
                                <h3 className="table_title">Langages Back-End</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>NodeJS</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>ExpressJS</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                    </table>
                    <table className="back">
                        <tr>
                            <th colSpan="2">
                                <h3 className="table_title">Bases de données</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>MsSQL</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                        <tr>
                            <td>MongoDB</td>
                            <td>⭐️⭐️⭐️⭐️</td>
                        </tr>
                    </table>
                </div>
            </article>
        </section>
    );
}