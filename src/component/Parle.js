import React from 'react';
import './parle.css';
import Fade from 'react-reveal/Fade';

class Parle extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            attali : false,
            camus:false,
            cioran:false,
            ghali: false,
            senghor:false,
            vigneault: false,
        }
        this.toggleAttali=this.toggleAttali.bind(this);
        this.disappearAttali=this.disappearAttali.bind(this);
        this.toggleCamus=this.toggleCamus.bind(this);
        this.disappearCamus=this.disappearCamus.bind(this);
        this.toggleCioran=this.toggleCioran.bind(this);
        this.disappearCioran=this.disappearCioran.bind(this);
        this.toggleGhali=this.toggleGhali.bind(this);
        this.disappearGhali=this.disappearGhali.bind(this);
        this.toggleSenghor=this.toggleSenghor.bind(this);
        this.disappearSenghor=this.disappearSenghor.bind(this);
        this.toggleVigneault=this.toggleVigneault.bind(this);
        this.disappearVigneault=this.disappearVigneault.bind(this);
    }
    toggleAttali(){
        this.setState({attali : true})
    }
    disappearAttali(){
        this.setState({attali : false})
    }
    toggleCamus(){
        this.setState({camus : true})
    }
    disappearCamus(){
        this.setState({camus : false})
    }
    toggleCioran(){
        this.setState({cioran : true})
    }
    disappearCioran(){
        this.setState({cioran : false})
    }
    toggleGhali(){
        this.setState({ghali : true})
    }
    disappearGhali(){
        this.setState({ghali : false})
    }
    toggleSenghor(){
        this.setState({senghor : true})
    }
    disappearSenghor(){
        this.setState({senghor : false})
    }
    toggleVigneault(){
        this.setState({vigneault : true})
    }
    disappearVigneault(){
        this.setState({vigneault: false})
    }
    render(){
        return(
            <Fade right> 
            <div className='parle' id='parle'>
                <h1><u>Ils en parlent :</u></h1>
                {this.state.attali && 
                <Fade right>
                <div className='auteurCitation'>
                    <p>
                        "Une culture, une religion ou une nation ne peut survivre ai elle se préoccupe d'exclure plutôt que de séduire, si sa légitimité se limite à revendiquer une place dans l'histoire: elle doit revendiquer une place dans l'avenir."
                    </p>
                    <p>   
                        Jacques ATTALI (Perspectives, Vol. 1)
                    </p>
                </div>
                </Fade>
                }
                 {this.state.camus && 
                <Fade right>   
                <div className='auteurCitation'>
                    <p>
                        "Oui, j'ai une patrie: la langue française."
                    </p>
                    <p>
                        Albert CAMUS (Carnets II)
                    </p>
                </div>
                </Fade>
                }
                 {this.state.cioran && 
                <Fade right>   
                <div className='auteurCitation'>
                    <p>                   
                        "On n'habite pas un pays, on habite une langue. Une patrie, c'est cela et rien d'autre."
                    </p>
                    <p>
                    Emil CIORAN
                    </p>
                </div>
                </Fade>
                }
                 {this.state.ghali && 
                <Fade right>   
                <div className='auteurCitation'>
                    <p>                   
                        "La Francophonie sera subversive et imaginative ou ne sera pas!"               
                    </p>
                    <p>
                        BOUTROS BOUTROS-GHALI
                    </p>
                </div>
                </Fade>
                }
                 {this.state.senghor && 
                <Fade right>   
                <div className='auteurCitation'>
                    <p>                                      
                        "La Francophonie, c'est un humanisme intégral qui se tisse autour de la terre, cette symbiose des énergies dormantes de tous les continents, de toutes les races qui se réveillent à leur chaleur complémentaire."              
                    </p>
                    <p>
                         Léopold Sédar SENGHOR
                    </p>
                </div>
                </Fade>
                }
                {this.state.vigneault&& 
                <Fade right>   
                <div className='auteurCitation'>
                    <p>                                      
                        " La Francophonie, c'est un vaste pays sans frontières. C'est celui de la langue française. C'est le pays de l'intérieur. C'est le pays invisible, spirituel, mental, moral qui est en chacun de vous."                    </p>
                    <p>
                        Gilles VIGNEAULT 
                    </p>
                </div>
                </Fade>
                }
                <div className='auteur'>
                    <img onMouseOver={this.toggleAttali} onMouseOut={this.disappearAttali} className='attali' src='/attali.png' alt =''/>
                    <img onMouseOver={this.toggleCamus} onMouseOut={this.disappearCamus} className='camus' src='/camus.png' alt =''/>
                    <img onMouseOver={this.toggleCioran} onMouseOut={this.disappearCioran} className='cioran' src='/cioran.png' alt=''/>
                    <img onMouseOver={this.toggleGhali} onMouseOut={this.disappearGhali}  className='ghali' src='/ghali.png' alt=''/>
                    <img onMouseOver={this.toggleSenghor} onMouseOut={this.disappearSenghor} className='senghor' src='/senghor.png' alt='' />
                    <img onMouseOver={this.toggleVigneault} onMouseOut={this.disappearVigneault} className='vigneault' src='/vigneault.png' alt='' />
                </div>
            </div>
            </Fade>
        )
    }
}

export default Parle;