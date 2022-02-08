import React from "react";
import { Header } from 'semantic-ui-react';
import ReadyMadeChoicesComponent from "../ReadyMadeChoicesComponent";
import UserChoiceComponent from "../UserChoiceComponent";
import ShopProduct from "@/shared/ShopProduct";

const ChoicesComponent = (props: { addItemToBasket: any }) => {
    
    const addItem = ( shoppingItem: ShopProduct ) => {
        props.addItemToBasket(shoppingItem);
    };

    return (
        <div>
            <Header>
                <h1>Shopping List</h1>
            </Header>
            <div className="ui divider"></div>
            <div>
                <UserChoiceComponent 
                    itemSubmitted={addItem} />
            </div>
            <div className="ui hidden divider"></div>
            <div>
                <ReadyMadeChoicesComponent 
                    addReadyMadeItem={addItem} />
            </div>
        </div>
    );
}

export default ChoicesComponent;