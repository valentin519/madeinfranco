
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
                            className='video1'
                            videoId="lx2ZmdWX-eA"
                            opts={videoOptions}
                            autoPlay="autoplay"
                            showInfo='false'
                            controls='true'
                            onReady={this._onReady}
                            onEnd={this._onEnd}
                        />
                        <p>Concours des Jeunes Designers Africains Francophones.</p> 
                    </Slide>       
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
                        <p>Défilé du 10 mars 2020 au Palais d'Iéna, Paris.</p> 
                    </Slide>       
                </div>   
            </div>
            </Fade>
        )
    }
    
};

export default Realisation;
