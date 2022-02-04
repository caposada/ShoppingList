interface ShopProduct {
    readonly name: string;
    readonly uniqueCode: string;  
    readonly price?: number; 
    readonly limit?: number; 
    readonly info?: string;
    readonly image?: string;
};

export default ShopProduct; 