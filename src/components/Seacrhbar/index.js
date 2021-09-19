import Input from "../Input"
import Button from "../Button"
import "./css/index.css"

let SeachBar=()=>{
    return(
        <div className="searchBar">
            <Input placeholder="Enter City Name" type="text" myClass="myInput"/>
            <Button myClass="myBtn">Search</Button>
        </div>
    )
}
export default SeachBar;