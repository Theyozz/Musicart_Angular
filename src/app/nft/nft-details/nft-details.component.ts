import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INft } from 'src/app/interface/INft.module';
import { NftService } from 'src/app/service/nft.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css']
})
export class NftDetailsComponent implements OnInit{
  nft: INft | undefined;
  nfts: INft[] = []
  threeNft: INft[] = []

  constructor(private route: ActivatedRoute,private nftService: NftService){}

  ngOnInit() {
    this.getNftDetails();
    this.displayAllNfts();
    this.getThreeNft();
  }

  getNftDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.nftService.getNft(id).subscribe(
        (nft) => {
          this.nft = nft;
        }
      );
    }
  }
  displayAllNfts(){
    this.nftService.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
        this.getThreeNft();
        console.log(this.nfts)
      }
    );
  }

  getThreeNft() {
    const collectionName = this.nft?.nFTCollection.name
  
    if (collectionName) {
      let counter = 0;
  
      this.threeNft = this.nfts.filter((nft) => {
        if (nft.nFTCollection.name === collectionName && counter < 3) {
          counter++;
          return true;
        }
        return false;
      });
    }
  }

}
