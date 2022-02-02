import React from "react";
import StatusLevel from "../../ShoppingData/StatusLevel";

const buttonDefaultClassNames = "ui basic labeled icon button ";
// const levelNormal = "green";
// const levelWarning = "olive";
// const levelDanger = "yellow";
// const levelSevere = "orange";
// const levelCritical = "red";

const ShoppingItemComponent = ({ basketItem, removeFromShoppingItem }) => {

    const remove = () => {
        removeFromShoppingItem(basketItem);
    };

    const buttonColor = () => {
        // Reached limit?
        if (basketItem.limit && basketItem.count === basketItem.limit)
            return buttonDefaultClassNames + StatusLevel.Critical.valueOf();

        var color = "primary";
        switch (true) {
            case (basketItem.count <= 2): 
                color = StatusLevel.Normal.valueOf();
                break;
            case (basketItem.count > 2 &&  basketItem.count <= 4):
                color = StatusLevel.Warning.valueOf();
                break;
            case (basketItem.count > 4 &&  basketItem.count <= 6):
                color = StatusLevel.Danger.valueOf();
                break;
            case (basketItem.count > 6 &&  basketItem.count <= 8):
                color = StatusLevel.Severe.valueOf();
                break;
            case (basketItem.count > 8):
                color = StatusLevel.Critical.valueOf();
                break;
            default:
                color = "primary";
                break;
        }
        return buttonDefaultClassNames + color;
    }

    return ( 
        <p>  
            <button 
            className={ buttonColor() } 
            type="button" 
            value="button">
                <i className="delete icon" onClick={() => remove()}></i>
                {basketItem.count} X {basketItem.name}
            </button>
        </p>
    );  
}

export default ShoppingItemComponent;