import React, {Component} from 'react';

import Nav from '../nav/nav';
import Form from '../form/form';
import Gallery from '../gallery/gallery';
import Footer from '../footer/footer';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Form />
          <hr className="line-break"/>
          <Gallery />
          <Footer />
        </div>
  )}
}

export default App;
