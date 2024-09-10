import { Component } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  cookiesAccepted: boolean = false;
  userLogged: boolean = this.tokenService.getIsLogged();

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    const storedValue = localStorage.getItem('cookiesAccepted');
    if (storedValue === null) {
      this.cookiesAccepted = false;
    } else {
      this.cookiesAccepted = storedValue === 'true';
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = true;
  }

  declineCookies(): void {
    localStorage.setItem('cookiesAccepted', 'false');
    this.cookiesAccepted = true;
  }
}
