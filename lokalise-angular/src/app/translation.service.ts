import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackendTranslateService implements TranslateLoader {
    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {
        return this.http.get(`http://localhost:3000/translations?lang=${lang}`);
    }
}
