import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  cookiesAccepted = false;

  ngOnInit(): void {
    this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
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
