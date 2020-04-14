
import './realisation.css';
import Fade from 'react-reveal/Fade';
import React from 'react';
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import Slide from 'react-reveal/Slide';


class Realisation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }

    }
    _onReady(event) {

    }

    _onEnd(event) {
        event.target.playVideo();
    }
    render() {
        const videoOptions = {
            playerVars: {
                autoplay: 0,
                controls: 1,
                rel: 0,
                showinfo: false
        }
    }
        return(
            <Fade left>
            <div className='realisation' id='realisation'>
                <div className='defileReims'>
                    <Slide left>
                        <YouTube
                            className='video'
                            videoId="lx2ZmdWX-eA"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <div className='text1'>
                        <p>
                            Mode d'Avenir 
                            Avec le designer de mode Ousmane Ouedraogo ("Ousman O."), Made-in-Francophonie a créé le Concours des Jeunes Designers de Mode Francophones dont la 1ère édition, en 2019, était dédiée aux jeunes créateurs africains avec le parrainage de Pathé'O, le couturier de Nelson Mandela, Desmond Tutu, Kofi Annan ou encore Mary Robinson, Noémie Campbell... Les lauréats ont été invités à présenter leurs modèles à l'occasion du défilé de clôture à Reims, le 26 septembre 2019, au prestigieux Palais du Tau.
                            Cette initiative vise à promouvoir l'entreprenariat, la création dans les pays africains francophones en offrant  aux lauréats visibilité, accès aux médias et aux marchés. L'initiative vise également à soutenir le travail des coopératives de femmes dans ces différents pays, qui tissent et teignent les tissus traditionnels, et à perpétuer ainsi un savoir-faire ancestral. Cette démarche contribue à l'autonomisation économique de ces femmes et des jeunes, également à une égalité des chances entre homme et femme parmi les lauréats. Il s'agit aussi de promouvoir des alternatives (coton bio, teintures végétales, chanvre...) qui peuvent faire une réelle différence dans une industrie qui se classe au second rang parmi les plus polluantes de la planète.
                            Le label "Made in Francophonie" qui accompagne toutes ces créations différentes, indique, en plus du nom du designer, celui des artisans qui ont contribué à la réalisation du modèle: pour une mode éthique et solidaire...
                        </p>
                        </div> 
                    </Slide>       
                </div> 
                <div className='unionJournal'>
                    <a href="#union" className='picUnion'>
                        <img src="/union.jpg" alt="Vignette" className='union'/>
                    </a>
                    <a href="#_" class="overlay" id="union">
                        <img src="/union.jpg" alt="Plein écran"/>
                    </a>
                    <div className='text3'>
                        <p>Journal régional L'Union découvre, à cette occasion, Made In Francophonie.</p>
                    </div>
                </div>
                <div className='defileParis'>
                    <Slide left>
                        <YouTube
                            className='video2'
                            videoId="BpoXYwJTRNg"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <div className='text2'>
                            <p>Le CESE invitait Made in Francophonie le 10 mars 2019, dans le cadre des 50 ans de la Francophonie, au Palais d'Iéna à Paris. L'occasion de présenter un défilé d'Ousman O. dont chaque modèle portait le label "Made in Francophonie".</p> 
                        </div>
                    </Slide>       
                </div> 
                
            </div>
            </Fade>
        )
    }
    
};

export default Realisation;
