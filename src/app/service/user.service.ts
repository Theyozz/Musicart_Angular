import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddress } from '../interface/IAddress.modele';
import { IUser } from '../interface/IUser.modele';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
  
  getAddressDetails(url: string): Observable<IAddress> {
    return this.http.get<IAddress>(url);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/${id}`);
  }
  searchUsersWithPseudo(pseudo: string): Observable<IUser[]> {
    const params = new HttpParams().set('pseudo', pseudo);
    return this.http.get<any[]>(this.baseUrl, { params })
  }
  createuser(formData: FormGroup): Observable<any>{
    return this.http.post(this.baseUrl, formData.getRawValue());
  }
  deleteUser(id: number): Observable<IUser>{
    return this.http.delete<IUser>(`${this.baseUrl}/${id}`)
  }
}
