import "./css/index.css"

let Button=(props)=>{
    let {children,onClick,myClass}=props;
    return(
        <button onClick={onClick} className={myClass}>{children}</button>
        )
}

export default Button;
