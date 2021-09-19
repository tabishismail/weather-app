import "./css/index.css";
// import "bootstrap"


let Input=(props)=>{
    let {type,myClass,placeholder}=props;
    return(
        <input type={type} placeholder={placeholder} className={myClass} />
    )
}
export default Input;