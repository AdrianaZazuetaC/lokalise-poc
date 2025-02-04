import { Component } from '@angular/core';
import { BackendTranslateService } from './translation.service';

@Component({
    standalone: true,
    providers: [BackendTranslateService],
    selector: 'app-root',
    template: `
    <div class="container">
      <h1>{{ title }}</h1>
      <p>{{ welcome_message}}</p>
      <p>{{ text}}</p>
      <button (click)="changeLanguage('es_MX')">Español</button>
      <button (click)="changeLanguage('en')">English</button>
    </div>
  `,
    styles: [`
    .container {
      text-align: center;
      margin-top: 50px;
    }
    h1 {
      font-size: 3em;
      color: #333;
    }
    p {
      font-size: 1.5em;
      color: #666;
    }
    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
    }
  `]
})
export class AppComponent {
    title: string = '';
    welcome_message: string = '';
    text = '';
    currentLang: string = 'en';

    constructor(private translateService: BackendTranslateService) {
        this.translateService.getTranslation(this.currentLang).subscribe((translations: any) => {
            this.title = translations['hello'];
            this.welcome_message = translations['welcome'];
            this.text = translations['text'];
        });
    }

    changeLanguage(lang: string) {
        this.currentLang = lang;
        this.translateService.getTranslation(lang).subscribe((translations: any) => {
            this.title = translations['hello'];
            this.welcome_message = translations['welcome'];
            this.text = translations['text'];
        });

    }
}