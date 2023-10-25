import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraison } from './models/livraison'; // Import the Livraison model

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  private baseUrl = 'http://localhost:8080/Livraison'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getLivraisons(): Observable<Livraison[]> {
    return this.http.get<Livraison[]>(`${this.baseUrl}/getlivraison`);
  }

  getLivraisonById(id: number): Observable<Livraison> {
    return this.http.get<Livraison>(`${this.baseUrl}/Alllivraison/${id}`);
  }

  addLivraison(livraison: Livraison): Observable<Livraison> {
    return this.http.post<Livraison>(`${this.baseUrl}/addlivraison`, livraison);
  }

  deleteLivraison(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deletelivraison/${id}`);
  }

  updateLivraison(id: number, livraison: Livraison): Observable<Livraison> {
    return this.http.put<Livraison>(`${this.baseUrl}/update-livraison/${id}`, livraison);
  }
}
