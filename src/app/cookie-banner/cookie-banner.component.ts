import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  cookiesAccepted = false;

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
