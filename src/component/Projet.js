import React from 'react';
import './projet.css';
import Fade from 'react-reveal/Fade';

const Projet =() => (
    <Fade right>
        <div className='projet'id='projet'>
            <h1 className='title'>Projets:</h1>
                <div className='projeTitle'></div>
                    <p>
                        <strong>
                                - La 2ème édition du Concours des Jeunes Designers de Mode Francophones :
                        </strong>
                    </p>
                    <p>
                        Il sera organisé à l'automne 2020 ou au printemps 2021 selon les contraintes liées à l'actualité. Cette 2ème édition permettrait de faire émerger un Concours-caravane dans les pays participants, puis un défilé-caravane qu'accueilleraient plusieurs villes françaises.
                    </p>
                    <p>
                        <strong>
                            - Publication de "2020... dixit de Gaulle" :
                        </strong>
                    </p>
                    <p> 
                        La publication de cet ouvrage-clé, écrit à 4 mains par Bernard Namura et Lucie Gëloen, est prévue à l'automne 2020.
                        <br/>
                        Il y a trente ans, un spectacle signé par Bernard Namura, commandité par l’Institut Charles de Gaulle, était présenté à Colombey-les-Deux-Églises à l’occasion du centenaire de la naissance du Général de Gaulle.
                        <br/>
                        Trente ans plus tard, les personnages de ce spectacle qui a tant marqué reprennent vie dans ce texte étonnant. 
                        Force leur est de constater un monde dur, difficile pour tant de ceux qui y vivent, un monde d’interrogations, d’inquiétudes aussi, un monde de clivages, d’exclusions, un monde en perte de valeurs, en perte de foi.
                        Du regard que les personnages portent sur un monde qui a tant changé au cours des trente dernières années, rejaillit régulièrement l’ombre de Colombey.
                        <br/>
                        Trente ans plus tard, en 2020, nous célébrons le cinquantième anniversaire de la Francophonie mais aussi de la mort de Charles de Gaulle et le texte que nous proposent Bernard Namura et Lucie Géloen, écrit avec maitrise mais aussi sensibilité, nous montre combien, plus que jamais, l’actualité de la pensée, de la vision de Charles de Gaulle s’impose dans un monde en crise qu'il faut réinventer avec humanité.
                        Des photos remarquables signées Laurent de Gaulle accompagnent l'ouvrage.
                        <br/>
                        Souscription à l'édition originale (quelques volumes numérotés encore disponibles): 
                        <a href='https://www.hymnalaya.fr/roman'>
                            Ici
                        </a>
                        </p>
                    <div  className='videoLivre'>
                        <video controls  width='50%' height='100%'> 
                            <source className='videoacceuil' src="livre.webm" type="video/webm"/>
                            <source className='videoacceuil' src="livre.mp4" type="video/mp4"/>  
                        </video> 
                    </div>
        </div>
    </Fade>
)

export default Projet;