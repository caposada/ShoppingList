import store  from '.';
import { 
    setBasketItems, 
    addBasketItems, 
    removeBasketItem, 
    updateBasketItem,
    clearBasketItem  
} from './basketSlice'
import BasketItem from "@/shared/BasketItem";

describe('basketSlice tests', () => {

    let state = store.getState().basket;

    beforeEach(() => {
        store.dispatch(clearBasketItem({}));
    });
      
    afterEach(() => {
        store.dispatch(clearBasketItem({}));
    });

    test('should return the initial state', () => {  
        expect(state.basketItems).toStrictEqual([]);
    });

    describe('test setBasketItems action', () => {        
        let basketItems: Array<BasketItem> = [];

        test('should return an empty array', () => {
            // Empty array added
            basketItems = [];
            store.dispatch(setBasketItems(basketItems));
            state = store.getState().basket;
            expect(state.basketItems).toStrictEqual([]);
        });

        test('should return an array with one item', () => {
            basketItems = [{
                uniqueCode: "0000",
                name: "test",
                count: 1
            }];
            store.dispatch(setBasketItems(basketItems));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
            expect(state.basketItems).toStrictEqual(basketItems);
        });

    });

    describe('test addBasketItems action', () => {          
        test('should return an array with one item', () => {
            let newBasketItem: BasketItem = {
                uniqueCode: "0000",
                name: "test",
                count: 1
            };
            store.dispatch(addBasketItems({ 
                basketItem: newBasketItem
            }));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
            expect(state.basketItems).toEqual([newBasketItem]);
        });

    });
    
});