import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoneRoutingModule } from './lone-routing.module';
import { LoneComponent } from './lone.component';


@NgModule({
  declarations: [
    LoneComponent
  ],
  imports: [
    CommonModule,
    LoneRoutingModule
  ]
})
export class LoneModule { }
