import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCodeRoutingModule } from './status-code-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    StatusCodeRoutingModule
  ]
})
export class StatusCodeModule { }
