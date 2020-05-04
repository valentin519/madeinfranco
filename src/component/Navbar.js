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
                    <a  href='#apropos' className='un'>
                        À propos
                    </a>
                    <a  href='#realisation' className='deux'>
                        Réalisations
                    </a>
                    <a  href='#projet'className='trois'>
                        Projets
                    </a>
                    <a  href='#parle'className='quatre'>
                        Ils en parlent
                    </a>
                    <a  href='#contact'className='cinq'>
                        Contact
                    </a>                  
                    <img onClick={this.refreshPage} src='/logofran.png'/>
                </div>
                <div className='navbarMobile'>
                <a  href='#apropos' className='un'>
                        À propos
                    </a>
                    <a  href='#realisation' className='deux'>
                        Réalisations
                    </a>
                    <a  href='#projet'className='trois'>
                        Projets
                    </a>
                    <a  href='#parle'className='quatre'>
                        Ils en parlent
                    </a>
                    <a  href='#contact'className='cinq'>
                        Contact
                    </a> 
                </div>
            </div>
        )    
    }        
}
export default Navbar;