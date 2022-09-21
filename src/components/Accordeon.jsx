import React from "react";

function Accordeon (props){
    return (
        <details className="dropdown">
        <summary>{props.text}</summary>
        <div>
          {props.children}
        </div>
      </details>
    )
}

export default Accordeon

