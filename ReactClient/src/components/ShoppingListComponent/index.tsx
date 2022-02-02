import React from "react";
import { Container, Header } from 'semantic-ui-react';
import AddItemForm from "../ReadyMadeChoicesComponent";
import ShoppingItem from "../ShoppingItemComponent";
import UserItemForm from "../UserItemComponent";
import { useState } from "react";
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
            basketItem.count = basketItem.count.valueOf() + 1;
            const newBasketItems: Array<BasketItem> = [...basketItems];
            setBasketItems(newBasketItems);
        }
    };

    const removeFromShoppingItem = (shoppingItem: ShopProduct) => {
        const newShoppingList = basketItems.filter(obj => obj !== shoppingItem);
        setBasketItems(newShoppingList);
        setCount(newShoppingList.length);
    };

    return ( 
        <Container>
            <Header>
                Shopping List
            </Header>
            <UserItemForm addToShoppingItem={addToShoppingItem} />
            <AddItemForm addToShoppingItem={addToShoppingItem} />
            <h1>{counter} {counter === 1 ? "item" : "items"}</h1>
            <div className="shoppingList-list">
                {basketItems.map((shoppingItem, index) => (
                    <ShoppingItem
                        shoppingItem={shoppingItem}
                        removeFromShoppingItem={removeFromShoppingItem}
                    />
                ))}
            </div>
        </Container>
    );  
}

export default ShoppingListComponent;