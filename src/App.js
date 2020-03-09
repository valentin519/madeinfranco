import React from 'react';
import './App.css';
import ReactLoading from 'react-loading';

function App() {
  return (
    <div className="App">
      <img src='/logofrancvFinal.png' alt=''/>
      <div className='description'>
      <p>Le monde francophone est un espace culturel, linguistique et économique unique.</p>
<p>
C'est avant tout un rassemblement d'êtres vivant sur différents continents qui ont une langue et des valeurs en partage.
</p>
<p>
Une richesse, une diversité vibrante qu’il faut protéger, nourrir, accompagner, promouvoir avec des actions qui insufflent le sens du partage, de la solidarité, de l’inclusion indissociables de cette diversité.
</p>
<p>
C’est ce qui anime « Made in Francophonie », association française loi 1901.</p>
</div>
      <div className='text'>
        <p>Site en cours de construction </p>
        <ReactLoading 
                  className='loading' 
                  type='bubbles'
                  color='black'
              />
      </div>
      <p>Nous serons heureux de vous acceuillir bientôt !</p>
    </div>
  );
}

export default App;
