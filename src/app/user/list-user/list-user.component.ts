import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/IUser.modele';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: IUser[] = []

  constructor(private user: UserService, private tokenService: TokenService){}
  
  ngOnInit(){
    this.displayAllUser();
  }

  displayAllUser(){
    this.user.getAllUsers().subscribe(
      (data) => {
        this.users = data['hydra:member'];
      }
    );
  }

  isLoggedIn(): boolean{
    return this.tokenService.isLogged();
  }

}
