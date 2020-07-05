import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Font Awesome imports
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
    FontAwesomeModule,
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
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    // library.addIcons(faCoffee);

    // Add icon package to the library for convenient access in other components
    // library.addIconPacks(fas, far, fab);
  }
 }
