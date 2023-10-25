import { Enchere } from "./enchere";

export class Product {
  id: number;
  description: string;
  prix: number;
  projet: Enchere | null;

  constructor(id: number, description: string, prix: number, projet: Enchere | null) {
    this.id = id;
    this.description = description;
    this.prix = prix;
    this.projet = projet;
  }
}
