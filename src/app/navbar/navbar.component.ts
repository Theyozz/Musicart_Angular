import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { IUser } from '../interface/IUser.modele';
import { UserService } from '../service/user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  users: IUser[] = []

  constructor(private tokenService: TokenService, private userService: UserService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.getUserPseudo();
  }

  isLoggedIn(): boolean {
    return this.tokenService.isLogged();
  }

  logout(): void {
    this.tokenService.clearTokenAndUserInfos()
  }

  getUserPseudo(){
    console.log(this.tokenService.getUserPseudo())
    return this.tokenService.getUserPseudo()
  }
}
