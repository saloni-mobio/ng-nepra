import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from "./signin/signin.component";

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        
    ]
})
export class AppModule { }
