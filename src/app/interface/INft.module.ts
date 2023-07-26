import { ICategory } from "./ICategory.modele";
import { INftCollection } from "./INftCollection.modele";
import { IUser } from "./IUser.modele";

export interface INft {
    id: number,
    name: string,
    img: string,
    description: string,
    launch_price_eur: number,
    launch_price_eth: number,
    Category: any,
    NFTCollection: any,
    user: IUser
}