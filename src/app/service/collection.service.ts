import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INftCollection } from '../interface/INftCollection.modele';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private baseUrl = 'http://127.0.0.1:8000/api/n_f_t_collections';

  constructor(private http: HttpClient) { }

  getAllCollection(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

  getCollection(id: number): Observable<INftCollection> {
    return this.http.get<INftCollection>(`${this.baseUrl}/${id}`);
  }
}
