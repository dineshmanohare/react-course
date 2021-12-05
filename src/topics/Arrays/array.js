import React , {useState} from "react"
const Array = () => {
    const [students,setStudents] = useState([]);
    const handleChange = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <h1>Array</h1>
            <input type="text" onChange={handleChange}/>
            <button onClick={()=>{console.log("clicked");}}>add</button>
        </div>
    )
}
export default Array;