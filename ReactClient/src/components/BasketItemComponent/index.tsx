import React from "react";
import { StatusLevel, GetColor } from "../../utils/StatusLevel";
import BasketItem from "@/shared/BasketItem";

const BasketItemComponent = (props: { basketItem: BasketItem, removeItemFromBasket: any }) => {
    const buttonDefaultClassNames = "ui basic labeled icon button ";

    const remove = () => {
        props.removeItemFromBasket(props.basketItem);
    };

    const buttonColor = () => {
        // Reached limit?
        if (props.basketItem.limit && props.basketItem.count === props.basketItem.limit)
            return buttonDefaultClassNames + StatusLevel.Critical.valueOf();
        return buttonDefaultClassNames + GetColor(props.basketItem.count);
    };

    return (  
        <button 
        className={ buttonColor() } 
        type="button" 
        value="button">
            <i className="delete icon" onClick={() => remove()}></i>
            {props.basketItem.count} X {props.basketItem.name}
        </button>
    );  
}

export default BasketItemComponent;