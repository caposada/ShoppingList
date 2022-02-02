import React from "react";
import ShopProduct from "../../ShoppingData/ShopProduct";
import ReadyMadeChoices from "../../ShoppingData/ReadyMadeChoices";

const ReadyMadeChoicesComponent = ({ addToShoppingItem }) => {

    const addReadyMadeItem = (shoppingItem: ShopProduct) => {
        addToShoppingItem(shoppingItem);
    };

    return (         
        <form>
            <div>     
                {ReadyMadeChoices.map((readyMadeChoice) =>            
                    <button 
                    className="ui teal labelled button" 
                    type="button" 
                    value="button"    
                    onClick={() => addReadyMadeItem(readyMadeChoice)}
                    data-tooltip={readyMadeChoice.info}
                    data-position="bottom left"
                    data-variation="tiny">
                        {readyMadeChoice.name}
                    </button>
                )}
            </div>
        </form>
    );  
}

export default ReadyMadeChoicesComponent;