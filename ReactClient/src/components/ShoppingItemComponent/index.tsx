import React from "react";

const ShoppingItemComponent = (props) => {

    const removeFromShoppingItem = () => {
        props.removeFromShoppingItem(props.shoppingItem);
    };

    return ( 
        <div>  
            <button 
            className="ui teal labeled icon button" 
            type="button" 
            value="button">
                <i className="delete icon" onClick={() => removeFromShoppingItem()}></i>
                {props.shoppingItem.count} X {props.shoppingItem.name}
            </button>
        </div>
    );  
}

export default ShoppingItemComponent;