import React, { Component } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render(){
      return(
          <Router>
            <Header />
            <Home />
            <About />
            <Experience />
            <Contact/>
            <Footer />
          </Router>
      )
  }
}

export default App;