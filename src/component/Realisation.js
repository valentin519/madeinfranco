
import './realisation.css';
import Fade from 'react-reveal/Fade';
import React from 'react';
import Navbar from './Navbar';
import YouTube from 'react-youtube';
import Slide from 'react-reveal/Slide';
import { Helmet } from "react-helmet";


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
            <Helmet>
                <title>A propos de l'association Made in Francophonie, définition.</title>
                <meta name="description" content="Réalisations de l'association Made In Francophonie" />
                <meta name="keywords" content="Différentes réalisations de l'association Made In Francophonie" />
            </Helmet>
           
                <div className='realisation' id='realisation'>
                    <h1 className='title'>
                        Réalisations :
                    </h1>
                    <div className='defileReims'>
                        <Slide left>
                            <YouTube
                                className='video1'
                                videoId="lx2ZmdWX-eA"
                                opts={videoOptions}
                                autoPlay="autoplay"
                                showInfo='false'
                                controls='true'
                                onReady={this._onReady}
                                onEnd={this._onEnd}
                            />
                            <div className='text1'>    
                                    <h2> 
                                        Mode d'Avenir :
                                    </h2>
                                    <h3>Concour des Jeunes Designers de Mode Francophone</h3>
                                <p>
                                    Avec <strong>Ousmane Ouedraogo</strong> ("<a  href='https://www.ousman-o.fashion' target='blank'> Ousman O. </a>"), Made-in-Francophonie a créé <strong>le Concours des Jeunes Designers de Mode Francophones</strong> dont la 1ère édition était dédiée aux jeunes créateurs africains avec le parrainage de &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Path%C3%A9%27O' target='blank'>
                                        Pathé'O
                                    </a>
                                     , le couturier de &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Nelson_Mandela'>
                                        Nelson Mandela
                                    </a>
                                    , &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Desmond_Tutu'>
                                        Desmond Tutu
                                    </a>
                                    , &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Kofi_Annan'>
                                        Kofi Annan 
                                    </a>
                                    &nbsp; ou encore &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Mary_Robinson'>
                                        Mary Robinson
                                    </a>
                                    , &nbsp;
                                    <a href='https://fr.wikipedia.org/wiki/Naomi_Campbell'>
                                        Naomi Campbell
                                    </a>
                                        ... Les lauréats ont été invités à présenter leurs modèles à l'occasion du défilé de clôture à <strong>Reims</strong> , le 26 septembre 2019, au prestigieux <strong> Palais du Tau </strong>.
                                    <br/>
                                    <p></p>
                                    L'initiative vise à:
                                    <br/>
                                    <p></p>
                                    - Promouvoir l'entreprenariat, la création dans <strong>les pays africains francophones </strong> en offrant  aux lauréats visibilité, accès aux médias et aux marchés. 
                                    <br/>
                                    <p></p>
                                    - Soutenir le travail des coopératives de femmes africaines, qui tissent et teignent les tissus traditionnels, et à perpétuer ainsi un <strong> savoir-faire ancestral </strong>. 
                                    <br/>
                                    <p></p>
                                    - Soutenir <strong>l'autonomisation économique </strong>de ces femmes et des jeunes, et également l'égalité des chances entre homme et femme parmi les lauréats. I
                                    <br/>
                                    <p></p>
                                    - Promouvoir des alternatives (coton bio, teintures végétales, chanvre...) qui feront une réelle différence dans une industrie qui se classe au <strong>second rang </strong> parmi les plus polluantes de la planète.
                                    <br/>
                                    <p></p>
                                    - Promouvoir également le label " <strong>Made in Francophonie </strong>" sur lequel figurent, en plus du nom du designer, celui des artisans qui ont contribué à la réalisation du modèle: pour <strong> une mode éthique et solidaire </strong>... Des vêtements qui ont une histoire que l'on partage, que l'on transmet.
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
                            <h2>Le journal régional L'Union découvre, à cette occasion, Made In Francophonie.</h2>
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
                                <p>
                                    <h2>
                                        Le Conseil Economique, Social et Environnemental 
                                    </h2>
                                    
                                     invitait <strong>Made in Francophonie</strong> le 10 mars 2019, dans le cadre des <strong> 50 ans </strong> de la Francophonie,<a href='https://fr.wikipedia.org/wiki/Palais_d%27I%C3%A9na' target='blank'> <strong>au Palais d'Iéna à Paris</strong></a>.
                                    <br/>
                                    L'occasion de présenter un défilé d'Ousman O. dont chaque modèle portait le label <strong>"Made in Francophonie"</strong>.
                                </p> 
                            </div>                       
                        </Slide>       
                    </div>               
                </div>          
            </Fade>
        )
    }
    
};

export default Realisation;
