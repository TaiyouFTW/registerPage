import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
  ]
})
export class LoginModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faGoogle);
  }
}
