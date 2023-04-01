import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoneComponent } from './lone.component';

const routes: Routes = [{ path: '', component: LoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoneRoutingModule { }
