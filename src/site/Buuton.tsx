

export const Buuton = () => {
    // const muFirstSubscriber = () => {
    //     console.log('Hellow')
    // }

    // const muFirstSubscriber2 = () => {
    //     console.log('Hellow2')
    // }
   
const onClickHandler = (name: string) =>{
console.log(name);

}
    return (
        <>
        {/* <button onClick={(event)=>{console.log('Hellow')}}>MyYouTubeChanel1</button> */}
        <button onClick={()=>{onClickHandler('Vany')}}>MyYouTubeChanel1</button>
        <button onClick={()=>{onClickHandler('Vasya')}}>MyYouTubeChanel2</button>
     
        </>
    )
}