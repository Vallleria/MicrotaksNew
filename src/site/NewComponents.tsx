

type NewComponentsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponents = (props: NewComponentsType) => {
    debugger
    return (
        <ul>
            {props.topCars.map(el =>
                <li key={el.manufacturer}>
                    <span>{el.manufacturer}</span>
                    <span>model : {el.model}</span>
                </li>
            )}

        </ul>

    )
}