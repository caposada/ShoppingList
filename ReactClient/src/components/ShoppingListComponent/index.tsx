import React, { useState } from "react";
import { Container, Header } from 'semantic-ui-react';
import ReadyMadeChoicesComponent from "../ReadyMadeChoicesComponent";
import ShoppingItemComponent from "../ShoppingItemComponent";
import UserItemComponent from "../UserItemComponent";
import ShopProduct from "../../ShoppingData/ShopProduct";
import BasketItem from "../../ShoppingData/BasketItem";

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

    return ( 
        <Container>
            <div className="ui celled grid">
                <div className="row">
                    <div className="four wide column">
                        <Header>
                            <h1>Shopping List</h1>
                        </Header>
                        <p>
                            <UserItemComponent addToShoppingItem={addToShoppingItem} />
                        </p>
                        <p>
                            <ReadyMadeChoicesComponent addToShoppingItem={addToShoppingItem} />
                        </p>
                    </div>
                    <div className="twelve wide column">
                        <Header>
                            <h1>{counter} {counter === 1 ? "item" : "items"}</h1>
                        </Header>
                        <p>
                            {basketItems.map((basketItem, index) => (
                                <ShoppingItemComponent
                                    basketItem={basketItem}
                                    removeFromShoppingItem={removeFromShoppingItem}
                                />
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );  
}

export default ShoppingListComponent;