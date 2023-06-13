import React from "react";
import Item from "../itens/Item";

const List = (props) => {
    const itens = props.itens
    return(
        <React.Fragment>
            <h2>{props.listName}</h2>
            <ul>
                {itens.map(item =>
                    <Item 
                        key={item.id} 
                        name={item.name}
                        status={item.done} 
                    />
                )}
            </ul>
        </React.Fragment>
    )
}
export default List