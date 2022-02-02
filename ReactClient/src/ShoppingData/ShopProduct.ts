interface ShopProduct {
    readonly name: string;
    readonly uniqueCode: string;     
    readonly limit?: number; 
    readonly info?: string;
    readonly image?: string;
};

export default ShopProduct; 