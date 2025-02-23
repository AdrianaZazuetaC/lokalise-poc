import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslatePipe } from './translate.pipe';
import { BackendTranslateService } from './translation.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [BackendTranslateService],
    bootstrap: [AppComponent]
})
export class AppModule { }