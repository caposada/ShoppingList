import React from "react";
import BasketItem from "@/shared/BasketItem";

const UserItemComponent = ({ addToShoppingItem }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = () => {
        const name = value.trim();
        setValue("");
        if (name !== "") {
            const shoppingItem: BasketItem = {
                name: name,
                uniqueCode: "0",
                count: 1
            };
            addToShoppingItem(shoppingItem);
        }
    };

    return (         
        <form>
            <div 
            className="ui left action input">
                <button 
                className="ui primary icon button" 
                type="button" 
                value="button"    
                onClick={() => handleSubmit()}
                data-tooltip="Add your own choice"
                data-position="bottom left"
                data-variation="tiny">
                    <i className="plus icon"></i>
                </button>
                <input 
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)} />
            </div>
        </form>
    );  
}

export default UserItemComponent;