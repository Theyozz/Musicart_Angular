import { IAddress } from "./IAddress.modele";

export interface IUser {
    id: number,
    pseudo: string,
    email: string,
    gender: boolean,
    firstname: string,
    lastname: string,
    BirthDate: Date,
    Address: IAddress,
    profil_picture: string
}