import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INft } from 'src/app/interface/INft.module';
import { INftCollection } from 'src/app/interface/INftCollection.modele';
import { CollectionService } from 'src/app/service/collection.service';
import { NftService } from 'src/app/service/nft.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit{
  nftCollection: INftCollection | undefined;
  nfts: INft[] = []

  constructor(private route: ActivatedRoute,private CollectionService: CollectionService,private nft: NftService){}

  ngOnInit() {
    this.getCollectionDetails();
    this.displayAllNfts();
  }

  getCollectionDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.CollectionService.getCollection(id).subscribe(
        (nft) => {
          this.nftCollection = nft;
        }
      );
    }
  }

  displayAllNfts(){
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
      }
    );
  }

}
