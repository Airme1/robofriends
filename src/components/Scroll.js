import React, { children } from "react";

const Scroll = (props) => {
    return(
        <div style={{overflowY: "scroll", border: "4px solid #ff7ff7", height: "100vh"}}>
            {props.children}
        </div>
    )
}

export default Scroll;