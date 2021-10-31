import React from "react"
import "../style.css"
const Title = ({title}) => {
    return (
        <div>
            <button className="button">{title}</button>
        </div>
    )
}
export default Title;