import React, {Component} from 'react';

import Header from '../header/header';
import Form from '../form/form';
import Gallery from '../gallery/gallery';
import Footer from '../footer/footer';

import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Form />
          <hr/>
          <Gallery />
          <Footer />
        </div>
  )}
}

export default App;
