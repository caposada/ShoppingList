import ShopProduct from "@/shared/ShopProduct";
import BasketItem from "@/shared/BasketItem";

function getReadyMadeShoppingItems() {
    return fetch('http://localhost:9000/shopping/readyMadeShoppingChoices/')
        .then(data => {
            return data.json();
        })
        .then(data => {
            return new Array<ShopProduct>(...data.readyMadeShoppingChoices);
        });
}

function getBasketItemsFromServer(userId: String) {
    return fetch('http://localhost:9000/shopping/usersBasketItems/' + userId)
        .then(data => {
            return data.json();
        })
        .then(data => {
            return new Array<BasketItem>(...data.list);
        });
}

function postBasketItemsToServer(userId: String, list: Array<BasketItem>) {
    return fetch('http://localhost:9000/shopping/usersBasketItems/' + userId, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ list })
    })
        .then(data => data.json());
}

export { 
    getReadyMadeShoppingItems, 
    getBasketItemsFromServer, 
    postBasketItemsToServer 
};