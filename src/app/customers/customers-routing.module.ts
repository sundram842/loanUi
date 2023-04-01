import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  {path:'add',component:AddCustomerComponent},
  {path:'edit/:id',component:EditCustomerComponent},
  {path:'search/:id',component:SearchCustomerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
