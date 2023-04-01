import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface Customer {
  customerId: string;
  fullName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  department: string;
}
@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  

  ngOnInit(): void {
  }

  dataSource!: MatTableDataSource<Customer>;
  displayedColumns: string[] = ['Pyment Id', 'Customer Id', 'Customer Name', 'Amount', 'Tax', 'Mode', 'Date','Notes'];
  customers: Customer[] = [
   
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.customers);
  }
}
