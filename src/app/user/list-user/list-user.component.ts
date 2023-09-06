import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { INft } from 'src/app/interface/INft.module';
import { IUser } from 'src/app/interface/IUser.modele';
import { NftService } from 'src/app/service/nft.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: IUser[] = []
  nfts: INft[] = []

  constructor(private user: UserService, private tokenService: TokenService, private toastr: ToastrService, private nftService: NftService){}
  
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

  fetchAllNft(){
    this.nftService.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member']
        console.log(this.nfts)
      }
    )
  }

  isLoggedIn(): boolean{
    return this.tokenService.getIsLogged();
  }
  
  userDelete(id: number): void {
    this.user.deleteUser(id).subscribe(
      () => {
        this.toastr.success("Utilisateur supprimé avec succès");
      }
    )
  }
}
