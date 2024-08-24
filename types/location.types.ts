export interface ICity {
    id: string;
    name: string;
    name_mm: null | string;
    region_id: string;
    delivery_cost: number,
}
export interface IRegion {
    id: string,
    name: string,
    name_mm: string,
    capital_id: string,
    iso: string,
    type: string,
}
