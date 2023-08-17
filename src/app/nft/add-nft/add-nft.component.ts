import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    img: HTMLInputElement,
    description: '',
    launchPriceEth: 0,
    launchPriceEur: 0,
    nFTCollection: '',
    user: '/api/users/107'
  });

  constructor(
    private formBuilder: FormBuilder, 
    private nftService: NftService,
    private toastr: ToastrService,
  ){}

  ngOnInit(): void {
    this.nftService.getAllCollection().subscribe(data => {
      this.nFTCollections = data['hydra:member'];
    });
  }

  onChangeFile(event: any){
    if (event.target.files.length > 0) {
       const file = event.target.files[0];
       const formData = new FormData();
       formData.append('file', file);
       this.form.patchValue({ img: `${file.name}` })
       console.log(file)
    }
  }

  submit(): void {
    console.log(this.form.getRawValue())
    this.nftService.createNft(this.form).subscribe(
      () => this.toastr.success("NFT crée"),
      () => this.toastr.error("Impossible de créer le NFT")
    );
  }
}
