import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Header } from './site/Header'
// import { Body } from './site/Body';
// import { Footer } from './site/Footer';
import { NewComponents } from './site/NewComponents';
import { Buuton } from './site/Buuton';
import { UniversalButton } from './components/UniveralButton';


function App() {
  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'}
  // ]

const Button1Foo =(name: string, age: number) => {
  console.log(name);
  
}
const Button2Foo =() => {
  console.log('Im stupid button');
  
}

  return (
    <>

      <UniversalButton name={'MyYouTubeChanel-1'} callBack ={()=> Button1Foo('Im Vasy', 23)}/>
      <UniversalButton name={'MyYouTubeChanel-2'}callBack ={()=> Button1Foo('Im Ivan', 27)}/>
      <UniversalButton name={'Stupid'} callBack={Button2Foo} />
      {/* <Buuton /> */}
      {/* <NewComponents  /> */}
      {/* <Header title={'New Body'}/>
      <Body titleForBody={'New Body'}/>
      <Footer titleForFooter={'New Body'}/> */}
    </>
  );
}

export default App;
