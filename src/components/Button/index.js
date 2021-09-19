import "./css/index.css"

let Button=(props)=>{
    let {children,onClick,myClass}=props;
    return(
        <button className={myClass}>{children}</button>
        )
}

export default Button;
