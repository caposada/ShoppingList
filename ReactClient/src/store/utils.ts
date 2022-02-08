function insertItem(array: any, action: any) {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
}

function removeItem(array: any, action: any) {
    return [
        ...array.slice(0, action.index), 
        ...array.slice(action.index + 1)];
}

function updateItem(array: any, action: any) {
    return array.map((item: any, index: number) => {
        if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        }
    });
}

export { insertItem, removeItem, updateItem };