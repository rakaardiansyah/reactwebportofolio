import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import Portofolio from './pages/Portofolio';
import Uiuxdesign from './pages/Uiuxdesign';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App2 extends Component {
  render() {
      return (
          <Router>
            <Portofolio />
            <Uiuxdesign/>
          </Router>
      )
    }
}

export default App2;