import { IOption } from "../interfaces/IOption";

export class Author implements IOption {
  public id: number;
  public name: string;

  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
  [key: string]: string | number;
}
