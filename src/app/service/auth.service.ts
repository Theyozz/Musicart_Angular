import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IToken } from '../interface/IToken.modele';
import { ICredentials } from '../interface/ICredentials.modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://localhost:8000/authentication_token'

  constructor(private http: HttpClient) {}

  login(credential: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.url, credential)
  }
}
