type headprops={
    head:string
}
const Props=(props:headprops)=>{
    return(
        <>
        <h1>Welcome to {props.head}</h1>
        </>
    )
}
export default Props