import React from "react";
import '../styles/Dropdowns.css'
import { ReactComponent as Arrow } from '../assets/arrow.svg'


function Dropdown (props){
    return (
        <details
            className="dropdown"
            open={props.open}
        >
            <summary>{props.text} <Arrow /></summary>
            <div>
              {props.children}
            </div>
      </details>
    )
}

export default Dropdown