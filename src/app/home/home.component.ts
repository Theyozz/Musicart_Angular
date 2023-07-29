import { Component, OnInit } from '@angular/core';
import { INft } from '../interface/INft.module';
import { NftService } from '../service/nft.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  nfts: INft[] = []
  randomNft: INft | undefined

  constructor(private nft: NftService){}
  
  ngOnInit(){
    this.displayAllNfts();
  }

  displayAllNfts(){
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
        this.getRandomNft();
      }
    );
  }

  getRandomNft() {
    const randomIndex = Math.floor(Math.random() * this.nfts.length);
    this.randomNft = this.nfts[randomIndex];
  }
}
