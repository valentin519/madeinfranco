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
            </p>
            <p>
                C'est avant tout un rassemblement d'êtres vivant sur différents continents qui ont une langue et des valeurs en partage.
            </p>
            <p>
                Une richesse, une diversité vibrante qu’il faut protéger, nourrir, accompagner, promouvoir avec des actions qui insufflent le sens du partage, de la solidarité, de l’inclusion indissociables de cette diversité.
            </p>
            <p>
                C’est ce qui anime « Made in Francophonie », association française loi 1901.
            </p>
        </div>
    </div>
    </Fade>
)

export default Apropos;