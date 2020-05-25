import React from 'react';
import './projet.css';
import Fade from 'react-reveal/Fade';
import { Helmet } from "react-helmet";

const Projet =() => (
    <Fade right>
        <div className='projet'id='projet'>
            <Helmet>
                <title>Les projets de l'association Made In Francophonie</title>
                <meta name="description" content="Les différents projets impliquant l'association Made In Francophonie" />
                <meta name="keywords" content="Projets Made In Francophonie" />
            </Helmet>
            <h1 className='title'>Projets:</h1>
                <div className='projeTitle'>
                    <h2>
                        2ème édition du Concours des Jeunes Designers de Mode Francophones :
                    </h2>
                    <p>
                        Il sera organisé à <strong>l'automne 2020</strong> ou au <strong>printemps 2021</strong> selon les contraintes liées à l'actualité. Cette 2ème édition permettrait de faire émerger un <strong>Concours-caravane</strong> dans les pays participants, puis un défilé-caravane qu'accueilleraient plusieurs <strong>villes françaises</strong>.
                    </p>
                </div>
                    <div className='textVideo'>
                        <div className='textLivre'>
                    <h2>
                             "2020... dixit de Gaulle" :
                    </h2>
                    <p> 
                        La publication de cet ouvrage-clé, écrit à 4 mains par <strong>Bernard Namura</strong> et <strong> Lucie Gëloen</strong>, est prévue à l'automne 2020.
                        <br/>
                        Il y a trente ans, un spectacle signé par Bernard Namura, commandité par <strong>l’Institut Charles de Gaulle </strong>, était présenté à Colombey-les-Deux-Églises à l’occasion du centenaire de la naissance du Général de Gaulle.
                        <br/>
                        <strong>Trente ans plus tard </strong>, les personnages de ce spectacle qui a tant marqué reprennent vie dans ce texte étonnant. 
                        Force leur est de constater un monde dur, difficile pour tant de ceux qui y vivent, un monde d’interrogations, d’inquiétudes aussi, un monde de clivages, d’exclusions, un monde en perte de valeurs, en perte de foi.
                        Du regard que les personnages portent sur un monde qui a tant changé au cours des trente dernières années, rejaillit régulièrement l’ombre de Colombey.
                        <br/>
                        Trente ans plus tard, en 2020, nous célébrons le <strong>cinquantième anniversaire de la Francophonie</strong> mais aussi de la mort de Charles de Gaulle et le texte que nous proposent <strong>Bernard Namura </strong> et <strong> Lucie Géloen </strong>, écrit avec maitrise mais aussi sensibilité, nous montre combien, plus que jamais, l’actualité de la pensée, de la vision de <strong> Charles de Gaulle</strong> s’impose dans un monde en crise qu'il faut réinventer avec humanité.
                        <br/>
                        Des photos remarquables signées <strong> Laurent de Gaulle </strong> accompagnent l'ouvrage.
                        <br/>
                        <p> </p>
                        <strong>
                        Souscription à l'édition originale (quelques volumes numérotés encore disponibles): &nbsp;
                        <a href='https://www.hymnalaya.fr/roman'>
                             Ici
                        </a>
                        </strong>
                        </p>
                        </div>
                    <div  className='videoLivre'>
                        <video controls  width='90%' height='100%'> 
                            <source className='videoacceuil' src="livre.webm" type="video/webm"/>
                            <source className='videoacceuil' src="livre.mp4" type="video/mp4"/>  
                        </video> 
                    </div>
                    </div>
        </div>
    </Fade>
)

export default Projet;