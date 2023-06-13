import React from "react";
import Item from "../itens/Item";

const List = (props) => {
    return(
        <React.Fragment>
            <h2>{props.listName}</h2>
            <ul>
                <Item name={'Item 1'} />
                <Item name={'Item 2'} />
            </ul>
        </React.Fragment>
    )
}
export default List