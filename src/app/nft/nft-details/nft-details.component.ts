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

  constructor(private route: ActivatedRoute,private nftService: NftService){}

  ngOnInit() {
    this.getNftDetails();
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

}
