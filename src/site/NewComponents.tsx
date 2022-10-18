

// type NewComponentsType = {
//     topCars: Array<TopCarsType>
// }

// type TopCarsType = {
//     manufacturer: string
//     model: string
// }

export const NewComponents = () => {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]
    return (

        <table>
            {topCars.map((el, index: number )=>{
                return (
                    <tr key={index}>
                <th>{index+1}</th>
                <th>{el.manufacturer}</th>
                <th>{el.model}</th>
            </tr>
                )
            })}
            

        </table>

        // <ul>
        //     {props.topCars.map(el =>
        //         <li key={el.manufacturer}>
        //             <span>{el.manufacturer}</span>
        //             <span>model : {el.model}</span>
        //         </li>
        //     )}

        // </ul>

    )
}