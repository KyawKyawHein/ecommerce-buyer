export interface IProductsProps {
    count ?: number;
    gender ?: string;
    category ?: string;
    search ?: string;
}
export interface IProduct {
    id: number;
    name: string;
    slug: string;
    category: {
        name : string;
        slug : string;
    }[];
    image: string;
    description: string;
    price: number;
    size : string[];
    products : {
        size : string;
        availableColor : {
            color : string;
            quantity : number;
        }[];
    }[];
}
export interface ProductsResponse extends Pagination{
    data : IProduct[];
}


export interface Pagination {
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