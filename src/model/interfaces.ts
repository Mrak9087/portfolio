export interface IWork {
    id:number,
    name:string;
    title: string,
    description: string,
    images:string[],
    repo:string,
    deploy:string,
    stack:string
}

export interface IAxiosCard {
    works: IWork[];
}