import { Component } from 'react';
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import './App.css';

// PAGES
import { HomePage } from './Components/Pages/HomePage';
import { ProjectsPage } from './Components/Pages/ProjectsPage';
import { AboutPage } from './Components/Pages/AboutPage';
import { ContactPage } from './Components/Pages/ContactPage';
import { MessageSuccessPage } from './Components/Pages/MessageSuccessPage';
import { ServicesPage } from './Components/Pages/ServicesPage';

import { Footer } from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/' exact component={HomePage}></Route>

          <Route path='/projects' exact component={ProjectsPage}></Route>

          <Route path='/about' exact component={AboutPage}></Route>

          <Route path='/contact' exact component={ContactPage}></Route>
          <Route path='/contact/success' exact component={MessageSuccessPage}></Route>

          <Route path='/services' exact component={ServicesPage}></Route>

          <Footer />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
