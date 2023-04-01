import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoneComponent } from './lone.component';
import { LoanListComponent } from './loan-list/loan-list.component';

const routes: Routes = [{ path: '', component: LoanListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoneRoutingModule { }
