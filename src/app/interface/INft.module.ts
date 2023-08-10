import { ICategory } from "./ICategory.modele";
import { INftCollection } from "./INftCollection.modele";
import { IUser } from "./IUser.modele";

export interface INft {
    id: number,
    name: string,
    img: string,
    launch_date: Date,
    description: string,
    launch_price_eur: number,
    launch_price_eth: number,
    Category: ICategory,
    nFTCollection: INftCollection,
    user: IUser
}