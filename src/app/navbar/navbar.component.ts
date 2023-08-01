import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private tokenService: TokenService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  isLoggedIn(): boolean {
    return this.tokenService.isLogged();
  }

  logout(): void {
    this.tokenService.clearToken()
  }
}
