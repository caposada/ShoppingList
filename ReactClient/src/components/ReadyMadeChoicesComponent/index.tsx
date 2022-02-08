import React, { useState, useEffect } from "react";
import ShopProduct from "@/shared/ShopProduct";
import { getReadyMadeShoppingItems } from "../../services/shopping";

const ReadyMadeChoicesComponent = (props: { addReadyMadeItem: any }) => {
    const empty = new Array<ShopProduct>();
    const [readyMadeShoppingChoices, setReadyMadeShoppingChoices] = useState(empty);
    
    useEffect(() => {
        // Get ReadyMadeShoppingChoices from server
        getReadyMadeShoppingItems()
            .then(( data: Array<ShopProduct> ) => {
                setReadyMadeShoppingChoices(data);
            });
    }, []);

    const readyMadeItemClicked = (shoppingItem: ShopProduct) => {
        props.addReadyMadeItem(shoppingItem);
    };

    return (         
        <form>
            <div className="ui list">     
                {readyMadeShoppingChoices.map((readyMadeShoppingChoice: ShopProduct) => 
                    <div className="item" key={readyMadeShoppingChoice.uniqueCode}>           
                        <button 
                        className="ui basic primary labelled button" 
                        type="button"  
                        value="button" 
                        name={readyMadeShoppingChoice.name}  
                        onClick={() => readyMadeItemClicked(readyMadeShoppingChoice)}
                        data-tooltip={readyMadeShoppingChoice.info}
                        data-position="right center"
                        data-variation="tiny">
                            <div>
                                {readyMadeShoppingChoice.image != null 
                                ? <img className="ui avatar image" src={readyMadeShoppingChoice.image} alt=""></img> 
                                : null}  
                                <span>{readyMadeShoppingChoice.name}</span>
                            </div>                      
                        </button>
                    </div>
                )}
            </div>
        </form>
    );  
}

export default ReadyMadeChoicesComponent;