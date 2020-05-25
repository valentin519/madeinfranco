import React from 'react';
import ReactLoading from 'react-loading';
import Fade from 'react-reveal/Fade';
import './loading.css'


class Loading extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            loading : true,
            button: false
        }

    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                button: true
            })
        },2000);
    }
    render(){
        return(
            <div className='load'>
                <img src='logofran.png' alt='' />
                    {this.state.loading &&
                    <ReactLoading 
                        className='loading' 
                        type='spin'
                        color='black'
                    />               
                 }
                <div className='firstLign'>             
                    <p>
                        "La Francophonie est fondatrice d'Humanité".
                    </p>
                </div>
                <div className='secondLign'>
                    <p>
                        François H. de Beaulieu
                    </p>
                </div>
                <div className='thirdLign'>
                    <p>
                        "La Francophonie au 21ème siècle" 
                        <br/>
                        Harvard Faculty Club, 2006.
                    </p>
                </div>
                {this.state.button &&
                    <Fade bottom>
                        <button onClick={this.props.closeModal}>
                             Entrer
                        </button>
                    </Fade>
                }
            </div>
        )
    }  
}
export default Loading