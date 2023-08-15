import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/ICategory.modele';
import { INftCollection } from '../interface/INftCollection.modele';
import { INft } from '../interface/INft.module';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NftService {
  private baseUrl = 'http://127.0.0.1:8000/api/n_f_ts';

  constructor(private http: HttpClient) { }

  getAllNfts(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  getAllCollection():Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/n_f_t_collections')
  }

  getCollection(url: string): Observable<INftCollection> {
    return this.http.get<INftCollection>(url);
  }

  getCategory(url: string): Observable<ICategory> {
    return this.http.get<ICategory>(url);
  }

  getNft(id: number): Observable<INft> {
    return this.http.get<INft>(`${this.baseUrl}/${id}`);
  }
  createNft(formData: FormGroup): Observable<any>{
    return this.http.post(this.baseUrl, formData.getRawValue());
  }
}
