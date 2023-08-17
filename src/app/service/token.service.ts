import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) {}

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
    this.router.navigate(['/login'])
  }

  saveUserCredentials(pseudo: string): void {
    localStorage.setItem('auth_user',pseudo);
  }

  getUserCredentials(): string | null{
    return localStorage.getItem('token')
  }
  getUserPseudo(): string | null{
    return localStorage.getItem('auth_user')
  }
}
