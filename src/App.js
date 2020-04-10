import React from 'react';
import './App.css';
import ReactLoading from 'react-loading';
import Navbar from './component/Navbar';
import Apropos from './component/Apropos';
import Projet from './component/Projet';
import Realisation from './component/Realisation';
import Contact from './component/Contact';
import Parle from './component/Parle';
import Loading from './component/Loading'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          loading : true
      }
this.closeModal=this.closeModal.bind(this);
  }
 closeModal(){
     this.setState({loading : false})
 }
  
  render() {
      return (
        <div className="App">
        {this.state.loading ? 
            (<Loading closeModal={this.closeModal}/>)
            :
          (
              <div className="App">
          <Navbar/>
          <Apropos/>
          <Realisation/>
          <Projet/>
          <Contact/>
          <Parle/>
          </div>
          )
            }
        </div>
      );
    }
}
export default App;
