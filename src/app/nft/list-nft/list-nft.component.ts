import { Component, OnInit } from '@angular/core';
import { INft } from 'src/app/interface/INft.module';
import { NftService } from 'src/app/service/nft.service';

@Component({
  selector: 'app-list-nft',
  templateUrl: './list-nft.component.html',
  styleUrls: ['./list-nft.component.css']
})
export class ListNftComponent implements OnInit {
  nfts: INft[] = []

  constructor(private nft: NftService){}
  
  ngOnInit(){
    this.displayAllNfts();
  }

  displayAllNfts(){
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
        console.log(this.nfts)
      }
    );
  }

}
