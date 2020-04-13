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
        },4000);
    }
    render(){
        return(
            <div className='load'>
                <img src='logofrancvFinal.png' alt='' />
                {this.state.loading &&
              
                <ReactLoading 
                        className='loading' 
                        type='spin'
                        color='black'
                />
               
                 }
                <p>"La francophonie est créatrice d'humanité"</p>
                <p>Francois H de BEAULIEU (Harvard community)</p>
                {this.state.button &&
                <Fade bottom>
                <button onClick={this.props.closeModal}> Entrer</button>
                </Fade>
                }
            </div>
        )
    }  
}
export default Loading