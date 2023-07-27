import { Component, OnInit } from '@angular/core';
import { INftCollection } from 'src/app/interface/INftCollection.modele';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.css']
})
export class ListCollectionComponent implements OnInit{
  NFTCollection: INftCollection[] = []

  constructor(private collection: CollectionService){}
  
  ngOnInit(){
    this.displayAllCollection();
  }

  displayAllCollection(){
    this.collection.getAllCollection().subscribe(
      (data) => {
        this.NFTCollection = data['hydra:member'];
      }
    );
  }
}
