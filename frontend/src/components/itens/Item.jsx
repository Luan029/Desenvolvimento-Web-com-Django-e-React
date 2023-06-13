import React from "react";
const Item = (props) => {
    const status = props.status
    return(
        <React.Fragment>
            <li>
                <h4>{props.name}</h4>
                <div>Status: {status ? <span>Completo</span> : <span>Incompleto</span>}</div>
            </li>
        </React.Fragment>
    )
}
export default Item