import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Portofolioo from './component/Portofolioo';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Footer from './component/Footer';

import Portofolio from './pages/portofolio';
import Uiuxdesign from './pages/uiuxdesign';



class App extends Component {
  render() {
      return (
        <Router>
            <Header />
            <Home />
            <About />
            <Portofolioo/>
            <Experience />
            <Contact />
            <Footer />

            <Container>
              <Routes>
                <Route path='/pages/Portofolio' element={<Portofolio/>} exact />
                <Route path='/pages/Uiuxdesign' element={<Uiuxdesign/>} exact />
              </Routes>
            </Container>

        </Router>
      )
    }
}

export default App;