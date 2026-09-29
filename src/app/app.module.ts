import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DATE_LOCALE, provideNativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-CO' },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: { dateInput: 'dd/MM/yyyy' },
        display: { dateInput: 'dd/MM/yyyy' }
      }
    }
  ]
})
export class AppModule {}
