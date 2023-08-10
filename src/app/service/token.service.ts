import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly USER_KEY = 'auth_user';

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token',token)
    this.router.navigate(['/'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }

  clearTokenAndUserInfos(): void{
    localStorage.removeItem('token')
    localStorage.removeItem('auth_user')
    this.router.navigate(['/'])
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }
  saveUserCredentials(pseudo: string): void {
    localStorage.setItem(this.USER_KEY,pseudo);
  }

  getUserCredentials(): string | null{
    return localStorage.getItem('token')
  }
  getUserPseudo(): string | null{
    return localStorage.getItem('auth_user')
  }
}
