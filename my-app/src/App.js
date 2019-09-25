import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Nyheder from './components/nyheder';
import Akiviteter from './components/Akiviteter';
import Outro from './components/outro';
import Footer from './components/Footer';
function App() {


  return (

    <div className="App">
      <BrowserRouter>

        <switch>
          <Route exact path='/' component={Header} />
        </switch>



      </BrowserRouter>
      <br/>
      <Intro />
      <br/>
      <Nyheder />
      <br/>
      <Akiviteter />
      <br/>
      <Outro/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
