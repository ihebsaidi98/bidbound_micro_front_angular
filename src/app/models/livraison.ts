export class Livraison {
  id: number;
  numero: string;
  date: Date;
  montantTotal: number;

  constructor(
    id: number,
    numero: string,
    date: Date,
    montantTotal: number
  ) {
    this.id = id;
    this.numero = numero;
    this.date = date;
    this.montantTotal = montantTotal;
  }
}
