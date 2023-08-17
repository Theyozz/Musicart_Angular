import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {

  private priceApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur';
  private historicalDataApiUrl = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=eur&days=7';

  constructor(private http: HttpClient) { }

  getEthereumPrice(): Observable<any> {
    return this.http.get(this.priceApiUrl);
  }

  getHistoricalData(): Observable<any> {
    return this.http.get(this.historicalDataApiUrl);
  }
}
