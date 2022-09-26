import React from "react";

function Dropdown (props){
    return (
        <details className="dropdown">
        <summary>{props.text}</summary>
        <div>
          {props.children}
        </div>
      </details>
    )
}

export default Dropdown

