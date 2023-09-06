import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { INftCollection } from 'src/app/interface/INftCollection.modele';
import { IUser } from 'src/app/interface/IUser.modele';
import { NftService } from 'src/app/service/nft.service';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-nft',
  templateUrl: './add-nft.component.html',
  styleUrls: ['./add-nft.component.css']
})
export class AddNftComponent implements OnInit{

  nFTCollections: INftCollection[] = []; 
  users: IUser[] = []
  user!: IUser;
  currentDate = new Date().toISOString().substr(0, 10);


  form: FormGroup = this.formBuilder.group({
    name: '',
    img: '',
    description: '',
    launchPriceEth: 0,
    launchPriceEur: 0,
    nFTCollection: '',
    user: '',
    launch_date: [this.currentDate]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private nftService: NftService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.currentDate 
    this.nftService.getAllCollection().subscribe(data => {
      this.nFTCollections = data['hydra:member'];
    });
    this.loadUsersAndFindUserByPseudo()
  }
  
  loadUsersAndFindUserByPseudo(): void{
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users['hydra:member'];
        const pseudo = this.tokenService.getUserPseudo();
        if (pseudo) {
          this.user = this.findUserByPseudo(pseudo);
          this.form.patchValue({ user: '/api/users/' + this.user.id });
        }
      }
    );
  }

  findUserByPseudo(pseudo: string): any {
    return Object.values(this.users).find(user => user.pseudo === pseudo);
  }

  submit(): void {
    console.log(this.form.getRawValue())
    this.nftService.createNft(this.form).subscribe(
      () => {
        this.toastr.success("NFT créé");
        this.router.navigate(['/users/' + this.user.id]);
      },
      (err) => {
        console.log(err)
        this.toastr.error("Impossible de créer le NFT")
      }
      )
      
  }

}
