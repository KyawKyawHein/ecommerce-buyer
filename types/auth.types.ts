export interface ILogin {
    email : string;
    password : string;
}

export interface ILoginRes {
    user : {
        id : number;
        name : string;
        email : string;
    },
    token : string;
}