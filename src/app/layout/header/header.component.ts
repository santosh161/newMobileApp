// src/app/layout/header/header.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'मराठी' },
    { code: 'kn', label: 'ಕನ್ನಡ' }
  ];

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  logout() {
    localStorage.removeItem('token'); // remove JWT
    window.location.href = '/login';  // redirect to login
  }
}
