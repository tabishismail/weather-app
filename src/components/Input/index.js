import "./css/index.css";
// import "bootstrap"


let Input=(props)=>{
    let {type,myClass,placeholder,id}=props;
    return(
        <input id={id} type={type} placeholder={placeholder} className={myClass} />
    )
}
export default Input;