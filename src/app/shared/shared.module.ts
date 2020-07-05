import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

// Font Awesome imports
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

const components = [
  HeaderComponent,
  FooterComponent,
  LoadingComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  exports: [
    components
  ]
  
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faSpinner);
  }
 }
