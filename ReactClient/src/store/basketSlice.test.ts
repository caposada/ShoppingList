import store  from '.';
import { 
    setBasketItems, 
    addBasketItems, 
    removeBasketItem, 
    updateBasketItem,
    clearBasketItem  
} from './basketSlice'
import BasketItem from "@/shared/BasketItem";

function getFirst() {
    let basketItem: BasketItem = {
        uniqueCode: "0001",
        name: "test1",
        count: 1
    };
    return basketItem;
}

function getSecond() {
    let basketItem: BasketItem = {
        uniqueCode: "0002",
        name: "test2",
        count: 1
    };
    return basketItem;
}

function getEmpty() {
    let basketItems: Array<BasketItem> = [];
    return basketItems;
}

function getOne() {
    let basketItems: Array<BasketItem> = [];
    basketItems.push(getFirst());
    return basketItems;
}

function getTwo() {
    let basketItems: Array<BasketItem> = [];
    basketItems.push(getFirst());
    basketItems.push(getSecond());
    return basketItems;
}

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
        let newBasketItems: Array<BasketItem> = [];

        test('should return an empty array', () => {
            newBasketItems = getEmpty();
            store.dispatch(setBasketItems(newBasketItems));
            state = store.getState().basket;
            expect(state.basketItems).toStrictEqual([]);
        });

        test('should return an array with one item', () => {
            newBasketItems = getOne();
            store.dispatch(setBasketItems(newBasketItems));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
            expect(state.basketItems).toStrictEqual(newBasketItems);
        });

        test('should return an array with two items', () => {
            newBasketItems = getTwo();
            store.dispatch(setBasketItems(newBasketItems));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(2);
            expect(state.basketItems).toStrictEqual(newBasketItems);
        });

    });

    describe('test addBasketItems action', () => {       
        let newBasketItem: BasketItem = getFirst();

        test('should return an array with one item', () => {
            store.dispatch(addBasketItems({ 
                basketItem: newBasketItem
            }));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
            expect(state.basketItems).toEqual([newBasketItem]);
        });
    });

    describe('test removeBasketItem action', () => {        
        let newBasketItems: Array<BasketItem> = [];

        test('should return an array with one item', () => {
            // Setup
            newBasketItems = getTwo();
            store.dispatch(setBasketItems(newBasketItems));

            store.dispatch(removeBasketItem({ 
                index: 0 
            }));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
        });

        test('should return empty array, dispatch ineffectual on empty intial array', () => {
            store.dispatch(removeBasketItem({ 
                index: 0 
            }));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(0);
        });
    });

    describe('test updateBasketItem action', () => {  

        test('should return item changed', () => {
            // Setup
            let newBasketItems: Array<BasketItem> = getOne();
            store.dispatch(setBasketItems(newBasketItems));
            
            let newBasketItem: BasketItem = getSecond();
            store.dispatch(updateBasketItem({
                basketItem: newBasketItem,
                index: 0
            }));
            state = store.getState().basket;
            expect(state.basketItems).toHaveLength(1);
            let changed = state.basketItems[0];
            expect(changed?.uniqueCode).toBe(newBasketItem.uniqueCode);
            expect(changed?.name).toBe(newBasketItem.name);
        });
    });
    
});