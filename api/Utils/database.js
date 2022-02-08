var TAFFY = require( 'taffy' );

var db = TAFFY([
    {   
        "id"  : "1234",
        "basketItems"  : []
    }
]);

const getUsersBasketItems = (id) => {
    var entry = db({id:id}).first();
    const basketItems = entry.basketItems;
    return basketItems;
};

const postUsersBasketItems = (id, list) => {
    var entry = db({id:id});
    entry.update({basketItems:list});
};

module.exports = { getUsersBasketItems, postUsersBasketItems };