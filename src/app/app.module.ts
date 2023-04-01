import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { MatTableModule } from '@angular/material/table';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { SearchCustomerComponent } from './customers/search-customer/search-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { InvoicesListComponent } from './invoices/invoices-list/invoices-list.component';
import { PaymentListComponent } from './payments/payment-list/payment-list.component';
import { LoanListComponent } from './lone/loan-list/loan-list.component';
import { PlanListComponent } from './plans/plan-list/plan-list.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CustomerListComponent,
    AddCustomerComponent,
    SearchCustomerComponent,
    EditCustomerComponent,
    InvoicesListComponent,
    PaymentListComponent,
    LoanListComponent,
    PlanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    CommonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
