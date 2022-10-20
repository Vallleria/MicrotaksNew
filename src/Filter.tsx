import {FilterType} from './App'

type MoneyType = {
    money: Array<MoneyTypeObject>
    onClickHandler: (value: FilterType ) => void

}
type MoneyTypeObject = {
    banknots: string
    value: number
    number: string
    
}


export const Filter = (props: MoneyType ) => {
    
    return (
        <>

        <ul>
          {props.money.map((moneyArray, index) => {
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
       
          <button onClick={() => { props.onClickHandler('All') }}>All</button>
          <button onClick={() => { props.onClickHandler('Dollars') }}>Dollars</button>
          <button onClick={() => { props.onClickHandler('RUBLS') }}>RUBLS</button>
        </div>
</>  
    )
}