import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Header } from './site/Header'
// import { Body } from './site/Body';
// import { Footer } from './site/Footer';
import { NewComponents } from './site/NewComponents';


function App() {
  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'}
  // ]
  return (
    <>
    <NewComponents  />
      {/* <Header title={'New Body'}/>
      <Body titleForBody={'New Body'}/>
      <Footer titleForFooter={'New Body'}/> */}
    </>
  );
}

export default App;
