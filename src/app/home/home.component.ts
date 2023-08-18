import { Component, OnInit } from '@angular/core';
import { INft } from '../interface/INft.module';
import { NftService } from '../service/nft.service';
import { EthereumService } from '../service/ethereum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  nfts: INft[] = []
  randomNft: INft | undefined
  ethActualPrice: any
  ethereumPrice: any;
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

  constructor(private nft: NftService,private ethereumService: EthereumService){}
  
  ngOnInit(){
    this.displayAllNfts();
    this.ethereumPrice = this.ethereumService.getEthereumPrice();

    this.ethereumService.getHistoricalData().subscribe((data: any) => {
      const filteredData = this.filterDataForDailyPrice(data.prices);
      this.lineChartData = [{
        data: filteredData.map((entry: any) => entry[1]),
        label: 'Ethereum Price (EUR)'
      }];
      this.lineChartLabels = filteredData.map((entry: any) => new Date(entry[0]).toLocaleDateString());
    });
  }

  filterDataForDailyPrice(prices: any[]): any[] {
    const dailyPrices = [];
    const dateMap = new Map();

    for (const entry of prices) {
      const timestamp = new Date(entry[0]);
      const hour = timestamp.getHours();

      if (hour === 23 && !dateMap.has(timestamp.toLocaleDateString())) {
        dateMap.set(timestamp.toLocaleDateString(), true);
        dailyPrices.push(entry);
      }
    }

    this.ethActualPrice = dailyPrices[0][1]
    return dailyPrices;
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
