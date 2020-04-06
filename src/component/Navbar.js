import React from "react";
import './navbar.css';

class Navbar extends React.Component {

    render(){
        return(
            <div className='nav'>
                {/* <img src='/logofrancvFinal.png' alt=''/> */}
                <div className='navbarSelection'>
                    <p className='un'>A propos</p>
                    <p className='deux'>Réalisations</p>
                    <p className='trois'>Projets</p>
                    <p className='quatre'>Contact</p>
                    <p className='cinq'>Ils en parlent</p>
                </div>
            </div>
        )    
    }        
}
export default Navbar;