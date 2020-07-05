import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Interceptors
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

// Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const components = [
  AppComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
