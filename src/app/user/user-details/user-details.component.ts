import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INft } from 'src/app/interface/INft.module';
import { IUser } from 'src/app/interface/IUser.modele';
import { NftService } from 'src/app/service/nft.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  user: IUser | undefined;
  nfts: INft[] = []
  nft: INft | undefined;
  nftUser: INft[] = []

  constructor(private route: ActivatedRoute,private userService: UserService, private tokenService: TokenService, private nftService: NftService){}

  async ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      try {
        this.user = await this.userService.getUser(id).toPromise();
      } catch (error) {
        console.error(error);
      }
    
      try {
        const nfts = await this.nftService.getAllNfts().toPromise();
        this.nfts = nfts['hydra:member'];
      } catch (error) {
        console.error(error);
      }
    
      this.getNftUser();
    }
  }

  getUserDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.userService.getUser(id).subscribe(
        (user) => {
          this.user = user;
        }
      );
    }
  }

  isLoggedIn(): boolean{
    return this.tokenService.isLogged();
  }

  displayAllNfts(){
    this.nftService.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
      }
    );
  }

  getNftUser(){
    const userId = this.user?.id;
    if (userId) {
      this.nftUser = this.nfts.filter((nft) => nft.user.id === userId);
    }
  }
}
