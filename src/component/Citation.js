
import React from 'react';
import './citation.css';
import Loading from './Loading';
import { Link } from 'react-router-dom';



class Citation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading : true
        }
    }
render(){
        return (
            <div className='citation' id='citation'>
               <marquee>
                "Une culture , une religion ou une nation ne peut survivre si elle se préocupe d'exclure plutôt que de séduire , si sa légitimité se limite à revendiquer une place dans l ' Histoire ; elle doit revendiquer une place dans l ' avenir." (Jacques ATTALI)
                "La Francophonie sera submersive et imaginative ou ne sera pas !" (Butros BOUTROS-GHALI)
                "On n'habite pas un pays , on habite une langue. Une patrie c'est cela et rien d'autre." (Emil CIORAN)
                "Ma patrie , c'est la langue Française" (Albert Camus)
                "La Francophonie, c'est cet humanisme intégral qui se tisse autour de la terre , cette synbiose des énergies dormantes de tous les continents, de toutes les races , qui se reveillent à leur chaleur complémentaire" (Léopold SEDAR SENGHOR)
               </marquee>
            </div>
        )
    }
}

export default Citation;