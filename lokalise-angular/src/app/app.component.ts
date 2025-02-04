import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `<h1>{{ 'HELLO' | translate }}</h1>`
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('en');
    }
}