import React from "react";
const Item = (props) => {
    return(
        <React.Fragment>
                <li>Item descrição: {props.name}</li>
        </React.Fragment>
    )
}
export default Item