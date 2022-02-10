import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'semantic-ui-react';
import ChoicesComponent from "../ChoicesComponent";
import BasketComponent from "../BasketComponent";
import ShopProduct from "@/shared/ShopProduct";
import BasketItem from "@/shared/BasketItem";
import {
    selectBasketItems,
    addBasketItems,
    updateBasketItem
} from '../../store/basketSlice';

const ShoppingComponent = () => {
    const basketItems = useSelector(selectBasketItems);
    const dispatch = useDispatch();

    const addItemToBasket = ( shopProduct: ShopProduct ) => {
        // Already in list?
        let foundBasketItem = basketItems.find((x:BasketItem) => x.uniqueCode === shopProduct.uniqueCode);
        if (foundBasketItem === undefined) {
            // Doesn't exists  
            let newBasketItem: BasketItem = { ...shopProduct } as BasketItem;   
            newBasketItem.count = 1;
            dispatch(addBasketItems({ 
                basketItem: newBasketItem
            }));      
        } else {
            // Does exists
            if (foundBasketItem.limit == null || foundBasketItem.count < foundBasketItem.limit) {
                const index = basketItems.indexOf(foundBasketItem);  
                let newBasketItem: BasketItem = { ...foundBasketItem };    
                newBasketItem.count = newBasketItem.count.valueOf() + 1;  
                dispatch(updateBasketItem({ 
                    basketItem: newBasketItem,
                    index: index
                })); 
            }
        }
    };

    return ( 
        <Container>
            <div className="ui celled grid">
                <div className="row">
                    <div className="four wide column">
                        <ChoicesComponent 
                            addItemToBasket={addItemToBasket} />
                    </div>
                    <div className="twelve wide column">
                        <BasketComponent />
                    </div>
                </div>
            </div>
        </Container>
    );  
}

export default ShoppingComponent;