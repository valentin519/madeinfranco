import React from 'react';
import './apropos.css';
import Fade from 'react-reveal/Fade';
import { Helmet } from "react-helmet";

const Apropos = () => (
    <Fade right>
        <div className='Apropos' id='apropos'>  
            <Helmet>
                <title>A propos de l'association Made in Francophonie, définition.</title>
                <meta name="description" content="Définition de la francophonie et description de l'association Made In Francophonie" />
                <meta name="keywords" content="Définition Francophonie" />
            </Helmet>     
            <h1>À propos :</h1>
            <h2>
                Le monde francophone est un espace culturel , linguistique et économique unique.
            </h2> 
            <div className='contenuApropos'>
                <div className='boiteTexte'>
                    <div className='definition'>                
                        <h3>La Francophonie, définition :</h3>
                        <a href='https://fr.wikipedia.org/wiki/Francophonie'>Celon Wikipédia</a>   
                        <p>La francophonie, également appelé monde francophone ou encore espace francophone désigne l'ensemble des personnes et des institutions qui utilisent le français comme langue de première socialisation, langue d'usage, langue administrative, langue d'enseignement ou langue choisie1.</p>                
                        <br/>
                        <a href="#les_francophones_dans_le_monde">
                            <img src="/Les_francophones_dans_le_monde.jpg" alt="Vignette" className='repartitionFrancophone'/>
                        </a>
                        <a href="#_" class="overlay" id="les_francophones_dans_le_monde">
                            <img src="/Les_francophones_dans_le_monde.jpg" alt="Made in Francophonie, répartition des francophones dans le monde"/>
                        </a>
                    </div>
                    <div className='definitionPerso'>
                        <h3>La Francophonie , notre définition :</h3>
                        <a href='https://fr.wikipedia.org/wiki/Francophonie'>Notre réalitée:</a> 
                        <p>
                            C'est avant tout un rassemblement d'êtres vivant sur différents continents qui ont une langue et des valeurs en partage.
                            <br/>
                            <p></p>
                            Une richesse, <strong> une diversité vibrante </strong> qu’il faut protéger, nourrir, accompagner, promouvoir avec des actions qui insufflent le sens du partage, de la solidarité, de l’inclusion indissociables de cette diversité. Des actions qui s'inscrivent également dans les Objectifs de Développement Durable de l'ONU pour 2030.
                            <br/>
                            <p></p>
                            C’est ce qui anime l'équipe de « <strong>Made in Francophonie </strong> », association française loi 1901, dans ses projets, ses réalisations que nous vous proposons de découvrir ici...
                        </p>       
                    </div>
                </div>
                <div className='boiteImg'>
                    <img src='PhotoSite.png' alt='' />
                </div>
            </div>
        </div>
    </Fade>
)

export default Apropos;