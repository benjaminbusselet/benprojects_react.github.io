import React from "react";

export default function Formations() {

    return (
        <section className="formations">
            <div className="title">
                <h2 className="title_item name">BENJAMIN BUSSELET</h2>
                <h3>FORMATIONS</h3>
            </div>
            <article>
                <div className="item1">
                    <small>2019</small>
                    <h4 className="subtitle">OpenClassrooms - Bac+3</h4>
                    <p>Développeur d'Application - Frontend</p>
                </div>
                <div className="item2">
                    <small>2014</small>
                    <h4 className="subtitle">Validation Des Acquis - Bac+2</h4>
                    <p>Services Informatique Aux Organisations</p>
                </div>
                <div className="item3">
                    <small>2002</small>
                    <h4 className="subtitle">CFA en Alternance - Bac</h4>
                    <p>Technicien de Maintenance Informatique</p>
                </div>
            </article>
        </section>
    );
}
