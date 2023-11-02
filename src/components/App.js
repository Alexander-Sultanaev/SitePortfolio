import React from 'react';
import Header from "./Header/Header";
import Techs from './Techs/Techs';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Techs/>
      <Projects/>
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
