import React from "react";
import ShopProduct from "@/shared/ShopProduct";

const UserChoiceComponent = (props: { itemSubmitted: any }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = value.trim();
        setValue("");
        if (name !== "") {
            const shoppingItem: ShopProduct = {
                name: name,
                uniqueCode: "0000_" + name
            };
            props.itemSubmitted(shoppingItem);
        }
    };

    return (         
        <form onSubmit={handleSubmit}>
            <div 
            className="ui left action input">
                <button 
                className="ui primary icon button" 
                type="submit"
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

export default UserChoiceComponent;