

type UniversalButtonType = {
    name: string
    callBack: ()=> void
}

export const UniversalButton = (props: UniversalButtonType) => {
const onClickHandler = () => {
    props.callBack()
    
}

    return(
        <>
        <button onClick={onClickHandler}>{props.name}</button>
        
        </>
    )
}