// Import React and Component from React, styels and components 
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';


// creating a class component
class App extends Component {

//class component has a render() method followed by the return
  render() {
    return (
//  returning all the components 
      <div className="App">
//       Header has the style and width directly added
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
