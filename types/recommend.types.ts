export interface IRecommendProps{
    shopId : number;
    rowCount ?: number;
}

export interface Recommend {
    id : number;
    text : string;
    user : string;
    user_img : string;
}