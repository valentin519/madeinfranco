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
        this.setState({senghor : !this.state.senghor})
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
                    <h1>Ils en parlent :</h1>
                    <div className='boiteMilieu'>
                        <div className='boiteAuteur'>
                            <p onMouseOver={this.toggleAttali} onMouseOut={this.disappearAttali} >Jacques Attali</p>
                            <p onMouseOver={this.toggleCamus} onMouseOut={this.disappearCamus} >Albert Camus</p>                          
                            <p onMouseOver={this.toggleGhali} onMouseOut={this.disappearGhali}>Boutros Boutros-Ghali</p>
                            <p onMouseOver={this.toggleSenghor} onMouseOut={this.disappearSenghor} >Léopold Sédar Senghor</p>
                            <p onMouseOver={this.toggleVigneault} onMouseOut={this.disappearVigneault}>Gilles Vigneault</p>
                            <p onMouseOver={this.toggleCioran} onMouseOut={this.disappearCioran}>Emil Cioran</p>
                        </div>
                        <div className='boiteCitation'>
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
                                            " La Francophonie, c'est un vaste pays sans frontières. C'est celui de la langue française. C'est le pays de l'intérieur. C'est le pays invisible, spirituel, mental, moral qui est en chacun de vous."                   
                                        </p>
                                        <p>
                                            Gilles VIGNEAULT 
                                        </p>
                                    </div>
                                </Fade>
                            }
                        </div>
                    </div>
                    <div className='auteur'>
                        <div className='relative'>
                            <img className={this.state.attali ? 'attaliHover' : 'attali'} src='/attaliSansFond.png' alt =''/>
                            <img className={this.state.camus ? 'camusHover' : 'camus' } src='/camusSansFond.png' alt =''/>
                            <img className={this.state.cioran ? 'cioranHover': 'cioran'} src='/CioranSansFond.png' alt=''/>
                            <img className={this.state.ghali ? 'ghaliHover' :'ghali'}  src='/ghali.png' alt=''/>
                            <img className={this.state.senghor ? 'senghorHover' : 'senghor'} src='/SenghorSansFond.png' alt='' />
                            <img className={this.state.vigneault ? 'vigneaultHover' : 'vigneault'} src='/vigneault.png' alt='' />
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default Parle;