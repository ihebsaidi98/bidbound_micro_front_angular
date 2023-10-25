import { Component, OnInit } from '@angular/core';
import { Livraison } from '../models/livraison'; // Import the Livraison model
import { LivraisonService } from '../livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {
  newLivraison: Livraison = {
    id: 0,
    numero: '',
    date: new Date(),
    montantTotal: 0
  };
  livraisons: Livraison[] = []; // Array to hold the list of livraisons

  constructor(private livraisonService: LivraisonService) {}

  ngOnInit(): void {
    this.getLivraisons(); // Call the function to fetch livraisons on component initialization
  }

  getLivraisons(): void {
    this.livraisonService.getLivraisons().subscribe(
      (livraisons: Livraison[]) => {
        this.livraisons = livraisons;
      },
      (error: any) => {
        console.error('Error fetching livraisons:', error);
      }
    );
  }

  addLivraison(): void {
    this.livraisonService.addLivraison(this.newLivraison).subscribe(
      (createdLivraison: Livraison) => {
        console.log('Livraison created:', createdLivraison);
        this.getLivraisons(); // Refresh the livraison list after adding a new livraison
      },
      (error: any) => {
        console.error('Error creating livraison:', error);
      }
    );
  }

  deleteLivraison(id: number): void {
    this.livraisonService.deleteLivraison(id).subscribe(
      () => {
        console.log('Livraison deleted');
        this.getLivraisons(); // Refresh the livraison list after deleting a livraison
      },
      (error: any) => {
        console.error('Error deleting livraison:', error);
      }
    );
  }
}
