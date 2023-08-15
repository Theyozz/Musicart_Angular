import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { INftCollection } from 'src/app/interface/INftCollection.modele';
import { NftService } from 'src/app/service/nft.service';

@Component({
  selector: 'app-add-nft',
  templateUrl: './add-nft.component.html',
  styleUrls: ['./add-nft.component.css']
})
export class AddNftComponent implements OnInit{

  nFTCollections: INftCollection[] = []; 

  form: FormGroup = this.formBuilder.group({
    name: '',
    img: '',
    description: '',
    launchPriceEth: 0,
    launchPriceEur: 0,
    nFTCollection: '',
    user: '/api/users/107'
  });

  constructor(
    private formBuilder: FormBuilder, 
    private nftService: NftService
  ){}

  ngOnInit(): void {
    this.nftService.getAllCollection().subscribe(data => {
      this.nFTCollections = data['hydra:member'];
    });
  }

  submit(): void {
    console.log(this.form.getRawValue())
    this.nftService.createNft(this.form).subscribe(
      err => console.log(err)
    );
  }
}
