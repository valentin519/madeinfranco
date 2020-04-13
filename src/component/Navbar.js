import React from "react";
import './navbar.css';

class Navbar extends React.Component {
     refreshPage() {
        window.location.reload(false);
      }
    render(){
        return(
            <div className='nav'>
                <div className='navbarSelection'>
                    <a  href='#apropos' className='un'>A propos</a>
                    <a  href='#realisation' className='deux'>Réalisations</a>
                    <a  href='#projet'className='trois'>Projets</a>
                    <a  href='#parle'className='quatre'>Ils en parlent</a>
                    <a  href='#contact'className='cinq'>Contact</a>
                    
                    <img onClick={this.refreshPage} src='/logofrancvFinal.png'/>
                </div>
            </div>
        )    
    }        
}
export default Navbar;