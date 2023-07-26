import { IAddress } from "./IAddress.modele";

export interface IUser {
    id: number,
    pseudo: string,
    email: string,
    gender: number,
    firstname: string,
    lastname: string,
    BirthDate: Date,
    Address: IAddress
}