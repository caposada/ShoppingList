import React from "react";
import { StatusLevel, GetColor } from "../../utils/StatusLevel";

const ShoppingItemComponent = ({ basketItem, removeFromShoppingItem }) => {
    const buttonDefaultClassNames = "ui basic labeled icon button ";

    const remove = () => {
        removeFromShoppingItem(basketItem);
    };

    const buttonColor = () => {
        // Reached limit?
        if (basketItem.limit && basketItem.count === basketItem.limit)
            return buttonDefaultClassNames + StatusLevel.Critical.valueOf();
        return buttonDefaultClassNames + GetColor(basketItem.count);
    }

    return (  
        <button 
        className={ buttonColor() } 
        type="button" 
        value="button">
            <i className="delete icon" onClick={() => remove()}></i>
            {basketItem.count} X {basketItem.name}
        </button>
    );  
}

export default ShoppingItemComponent;