import { Pipe, PipeTransform } from '@angular/core';
import { BackendTranslateService } from './translation.service';
import { firstValueFrom } from 'rxjs';

@Pipe({
    name: 'translate',
    standalone: true
})
export class TranslatePipe implements PipeTransform {
    private translations: { [key: string]: string; } = {};

    constructor(private translateService: BackendTranslateService) { }

    transform(key: string): string {
        //if (!this.translations['en']) {
        this.translateService.getTranslation('en').subscribe(async (translations: any) => {
            console.log('translationsfirst-->', translations);
            this.translations = await firstValueFrom(this.translateService.getTranslation('en'));
        });
        //}
        //console.log('this.translations-->', this.translations);

        return this.translations['hello'];
    }
}