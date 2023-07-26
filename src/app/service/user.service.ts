import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAddress } from '../interface/IAddress.modele';
import { IUser } from '../interface/IUser.modele';

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
}
