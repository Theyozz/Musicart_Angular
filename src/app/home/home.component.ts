import { Component, OnInit } from '@angular/core';
import { INft } from '../interface/INft.module';
import { NftService } from '../service/nft.service';
import { EthereumService } from '../service/ethereum.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nfts: INft[] = []
  randomNft!: INft
  ethPrice!: number
  ethereumPrice!: Observable<number>;
  lineChartData: any = [];
  lineChartLabels: any = [];
  lineChartOptions: any = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: 'white'
        }
      },
      x: {
        ticks: {
          color: 'white'
        }
      }
    }
  };
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private nft: NftService, private ethereumService: EthereumService) { }

  ngOnInit() {
    this.displayAllNfts();

    // Récupération des données du cour de l'ETH
    this.ethereumPrice = this.ethereumService.getEthereumPrice();
    this.ethereumService.getHistoricalData().subscribe((data: any) => {
      let filteredData = this.filterDataForDailyPrice(data.prices);
      this.lineChartData = [{
        data: filteredData.map((entry: any) => entry[1]),
        label: 'Ethereum Price (EUR)'
      }];
      this.lineChartLabels = filteredData.map((entry: any) => new Date(entry[0]).toLocaleDateString());
    });
  }

  // Récupération du prix tout les jours à 23h
  filterDataForDailyPrice(prices: any[]): any[] {
    let dailyPrices = [];
    let dateMap = new Map();

    for (let entry of prices) {
      let timestamp = new Date(entry[0]);
      let hour = timestamp.getHours();

      if (hour === 23 && !dateMap.has(timestamp.toLocaleDateString())) {
        dateMap.set(timestamp.toLocaleDateString(), true);
        dailyPrices.push(entry);
      }
    }

    this.ethPrice = dailyPrices[0][1]
    return dailyPrices;
  }

  displayAllNfts() {
    this.nft.getAllNfts().subscribe(
      (data) => {
        this.nfts = data['hydra:member'];
        this.getRandomNft();
      }
    );
  }

  getRandomNft() {
    let randomIndex = Math.floor(Math.random() * this.nfts.length);
    this.randomNft = this.nfts[randomIndex];
  }
}
