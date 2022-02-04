import React, { useState } from "react";
import { Container, Header } from 'semantic-ui-react';
import ReadyMadeChoicesComponent from "../ReadyMadeChoicesComponent";
import ShoppingItemComponent from "../ShoppingItemComponent";
import UserItemComponent from "../UserItemComponent";
import ShopProduct from "@/shared/ShopProduct";
import BasketItem from "@/shared/BasketItem";
import { postBasketItemsToServer } from "../../services/shopping";

const ShoppingListComponent = () => {
    const initialBasketItems: Array<BasketItem> = [];
    const [basketItems, setBasketItems] = React.useState(initialBasketItems);
    const [counter, setCount] = useState(basketItems.length);

    const addToShoppingItem = ( shoppingItem: ShopProduct ) => {
        // Already in list?
        const basketItem: BasketItem = shoppingItem as BasketItem;
        if (!basketItems.includes(basketItem)) {
            basketItem.count = 1;
            const newBasketItems: Array<BasketItem> = [...basketItems, basketItem];
            setBasketItems(newBasketItems);
            setCount(newBasketItems.length);
        } else {
            if (basketItem.limit == null || basketItem.count < basketItem.limit) {
                basketItem.count = basketItem.count.valueOf() + 1;
                const newBasketItems: Array<BasketItem> = [...basketItems];
                setBasketItems(newBasketItems);
            }
        }
    };

    const removeFromShoppingItem = (shoppingItem: ShopProduct) => {
        const newShoppingList = basketItems.filter(obj => obj !== shoppingItem);
        setBasketItems(newShoppingList);
        setCount(newShoppingList.length);
    };

    const checkout = () => {
        // Send basketItems to API
        let userId = "1234";
        postBasketItemsToServer(userId, basketItems)
            .then(data => {
                const dummy = 0;
            });
    };

    return ( 
        <Container>
            <div className="ui celled grid">
                <div className="row">
                    <div className="four wide column">
                        <Header>
                            <h1>Shopping List</h1>
                        </Header>
                        <div className="ui divider"></div>
                        <div>
                            <UserItemComponent addToShoppingItem={addToShoppingItem} />
                        </div>
                        <div className="ui hidden divider"></div>
                        <div>
                            <ReadyMadeChoicesComponent 
                                addToShoppingItem={addToShoppingItem} />
                        </div>
                    </div>
                    <div className="twelve wide column">
                        <Header>
                            <h1>{counter} {counter === 1 ? "item" : "items"} in basket
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
                                {basketItems.map((basketItem, index) => (
                                    <div className="item"> 
                                        <ShoppingItemComponent
                                            key={basketItem.uniqueCode}
                                            basketItem={basketItem}
                                            removeFromShoppingItem={removeFromShoppingItem}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );  
}

export default ShoppingListComponent;