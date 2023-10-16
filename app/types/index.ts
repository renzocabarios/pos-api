import { RESOURCE } from "../constants";

export interface ITransactionModel {
  _id?: string;
  items: ITransactionItem[];
  total: number;
  deleted?: Boolean;
}

export interface ITransactionItem {
  item: string | IItemModel;
  name: string;
  price: number;
  quantity: number;
}

export interface IItemModel {
  _id?: string;
  name: string;
  price: number;
  deleted?: Boolean;
}

export interface IUserModel {
  firstName: string;
  lastName: string;
  __t?: string;
  deleted?: Boolean;
}

export interface IAddUserDto {
  firstName: string;
  lastName: string;
  type?: string;
  deleted?: Boolean;
}
