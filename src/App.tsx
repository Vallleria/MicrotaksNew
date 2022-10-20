import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Header } from './site/Header'
// import { Body } from './site/Body';
// import { Footer } from './site/Footer';
import { NewComponents } from './site/NewComponents';
import { Buuton } from './site/Buuton';
import { UniversalButton } from './components/UniveralButton';
import { Filter } from './Filter';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'


function App() {
  // const topCars = [
  //   {manufacturer:'BMW', model:'m5cs'},
  //   {manufacturer:'Mercedes', model:'e63s'},
  //   {manufacturer:'Audi', model:'rs6'}
  // ]

  // const Button1Foo =(name: string, age: number) => {
  //   console.log(name);

  // }
  // const Button2Foo =() => {
  //   console.log('Im stupid button');

  // }

  // let [a, setA] = useState(1)
  // const onClickHandler = () => {
  //   setA(++a)
  //   console.log(a);

  // }

  // const onClickHandler2 = () => {
  //   setA(0)
  //   console.log(a);

  // }


  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

let [filter, setFilter] =useState<FilterType>('All')

let currentMoney = money
  // currentMoney = money.filter((filterRuble) => filterRuble.banknots === 'RUBLS')
  // currentMoney = money.filter((filterRuble) => filterRuble.banknots === 'Dollars')
 
if (filter === 'Dollars'){
  currentMoney = money.filter((filterRuble) => filterRuble.banknots === 'Dollars')
} if(filter === 'RUBLS'){
  currentMoney = money.filter((filterRuble) => filterRuble.banknots === 'RUBLS')
}


  const onClickHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  } 


  return (
    <>
    <Filter money={currentMoney} onClickHandler={onClickHandler} />
      {/* <ul>
        {currentMoney.map((moneyArray, index) => {
          return (
            <li key={index}>
              <span>{moneyArray.banknots}</span>
              <span>{moneyArray.value}</span>
              <span>{moneyArray.number}</span>
            </li>
          )

        })}
      </ul>
      <div style={{ marginLeft: '35px' }}>
        <button onClick={() => { onClickHandler('All') }}>All</button>
        <button onClick={() => { onClickHandler('Dollars') }}>Dollars</button>
        <button onClick={() => { onClickHandler('RUBLS') }}>RUBLS</button>
      </div> */}










      {/* <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={onClickHandler2}>0</button> */}
      {/* <UniversalButton name={'MyYouTubeChanel-1'} callBack ={()=> Button1Foo('Im Vasy', 23)}/>
      <UniversalButton name={'MyYouTubeChanel-2'}callBack ={()=> Button1Foo('Im Ivan', 27)}/>
      <UniversalButton name={'Stupid'} callBack={Button2Foo} /> */}
      {/* <Buuton /> */}
      {/* <NewComponents  /> */}
      {/* <Header title={'New Body'}/>
      <Body titleForBody={'New Body'}/>
      <Footer titleForFooter={'New Body'}/> */}
    </>
  );
}

export default App;
