import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import BasketItemComponent from "../BasketItemComponent";
import { getBasketItemsFromServer, postBasketItemsToServer } from "../../services/shopping";
import BasketItem from "@/shared/BasketItem";
import {
    selectBasketItems,
    setBasketItems,
    removeBasketItem,
    selectTotalItemsCount
} from '../../store/basketSlice';

const BasketComponent = () => {
    const userId = "1234";
    const totalItemsCount = useSelector(selectTotalItemsCount);
    const basketItems = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    
    useEffect(() => {
        // Get ReadyMadeShoppingChoices from server
        getBasketItemsFromServer(userId)
            .then(( basketItems: Array<BasketItem> ) => {
                dispatch(setBasketItems(basketItems));  
            });
    }, []);

    const removeItemFromBasket = ( basketItem: BasketItem) => {        
        let foundBasketItem = basketItems.find(
            (x:BasketItem) => x.uniqueCode === basketItem.uniqueCode);
        if (foundBasketItem !== undefined) {
            const index = basketItems.indexOf(foundBasketItem);  
            dispatch(removeBasketItem(index));  
        }
    };

    const checkout = () => {
        // Send basketItems to API
        postBasketItemsToServer(userId, basketItems)
            .then(data => {
                toast.success("Basket items have been process.");
            })
            .catch(data => {
                toast.warn("Failed to process basket.");
            });
    };

    return (                     
        <div>
            <Header>
                <h1>{totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} in basket
                    <button 
                    className="ui primary right floated basic labeled icon button" 
                    type="button" 
                    value="button">
                        <i className="shopping cart icon" onClick={() => checkout()}></i>
                        Checkout
                    </button>
                </h1>
            </Header>
            <div className="ui divider"></div>
            <div>
                <div className="ui list">
                    {basketItems.map((basketItem: BasketItem, index: number) => (
                        <div 
                            className="item"
                            key={basketItem.uniqueCode}> 
                            <BasketItemComponent
                                basketItem={basketItem}
                                removeItemFromBasket={removeItemFromBasket}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ); 
}

export default BasketComponent;