import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { IUser } from '../interface/IUser.modele';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  users: IUser[] = []
  user!: IUser;

  constructor(private tokenService: TokenService, private userService: UserService){}

  ngOnInit(): void {
    this.loadUsersAndFindUserByPseudo();
  }

  loadUsersAndFindUserByPseudo(): void{
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users['hydra:member'];
        const pseudo = this.tokenService.getUserPseudo();
        if (pseudo) {
          this.user = this.findUserByPseudo(pseudo);
          console.log(this.user.roles[0])
        }
      }
    );
  }

  findUserByPseudo(pseudo: string): any {
    return Object.values(this.users).find(user => user.pseudo === pseudo);
  }

  isLoggedIn(): boolean {
    return this.tokenService.getIsLogged();
  }

  logout(): void {
    this.tokenService.clearTokenAndUserInfos()
  }
}
