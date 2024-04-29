export interface IProductsProps {
    page ?: number;
    gender ?: string;
    category ?: string;
    search ?: string;
}
export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    slug: string;
    stock_quantity: number;
    category: string;
}
export interface ProductsResponse {
    data : IProduct[];
    links : {
        first : null | string;
        last : null | string;
        prev : null | string;
        next : null | string;
    },
    meta : {
        current_page : number;
        from : number;
        last_page : number;
        links : {
            url : null | string;
            label : string;
            active : boolean;
        }[],
        path : string;
        per_page : number;
        to : number;
        total : number;
    }
}