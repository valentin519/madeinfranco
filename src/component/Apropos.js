import React from 'react';
import './apropos.css';
import Fade from 'react-reveal/Fade';

const Apropos = () => (
    <Fade right>
    <div className='Apropos' id='apropos'>
        <img src='logofrancvFinal.png' alt='' />
        <div className='boiteTexte'>
            <p>
                Le monde francophone est un espace culturel, linguistique et économique unique.
                C'est avant tout un rassemblement d'êtres vivant sur différents continents qui ont une langue et des valeurs en partage.
                Une richesse, une diversité vibrante qu’il faut protéger, nourrir, accompagner, promouvoir avec des actions qui insufflent le sens du partage, de la solidarité, de l’inclusion indissociables de cette diversité. Des actions qui s'inscrivent également dans les Objectifs de Développement Durable de l'ONU pour 2030.
                C’est ce qui anime l'équipe de « Made in Francophonie », association française loi 1901, dans ses projets, ses réalisations que nous vous proposons de découvrir ici...
            </p>       
        </div>
    </div>
    </Fade>
)

export default Apropos;