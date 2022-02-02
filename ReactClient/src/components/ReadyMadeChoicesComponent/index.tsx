import React from "react";
import ShopProduct from "../../ShoppingData/ShopProduct";
import ReadyMadeChoices from "../../ShoppingData/ReadyMadeChoices";

const ReadyMadeChoicesComponent = ({ addToShoppingItem }) => {

    const addReadyMadeItem = (shoppingItem: ShopProduct) => {
        addToShoppingItem(shoppingItem);
    };

    return (         
        <form>
            <div className="ui list">     
                {ReadyMadeChoices.map((readyMadeChoice) => 
                    <div className="item">           
                        <button 
                        className="ui basic primary labelled button" 
                        type="button"  
                        value="button"    
                        onClick={() => addReadyMadeItem(readyMadeChoice)}
                        data-tooltip={readyMadeChoice.info}
                        data-position="bottom left"
                        data-variation="tiny">
                            <div>
                                {readyMadeChoice.image != null 
                                ? <img className="ui avatar image" src={readyMadeChoice.image} alt=""></img> 
                                : null}  
                                <span>{readyMadeChoice.name}</span>
                            </div>                      
                        </button>
                    </div>
                )}
            </div>
        </form>
    );  
}

export default ReadyMadeChoicesComponent;