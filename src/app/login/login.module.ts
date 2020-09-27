import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ]
})
export class LoginModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faGoogle);
  }
}
