import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  private isLoggedin = false;

  constructor(private router: Router, private toastr: ToastrService) { }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
    this.router.navigateByUrl('/')
  }

  setIsLogged(value: boolean) {
    this.isLoggedin = value;
  }

  getIsLogged(): boolean {
    return this.isLoggedin;
  }

  clearTokenAndUserInfos(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('auth_user')
    localStorage.removeItem('cookiesAccepted')
    this.isLoggedin = false
    this.router.navigate(['/login'])
  }

  saveUserCredentials(pseudo: string): void {
    localStorage.setItem('auth_user', pseudo);
  }

  getUserCredentials(): string | null {
    return localStorage.getItem('token')
  }
  getUserPseudo(): string | null {
    return localStorage.getItem('auth_user')
  }
}
