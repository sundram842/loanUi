import { Component } from '@angular/core';
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
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  displayedColumns: string[] = ['customerId', 'fullName', 'lastName', 'phoneNumber', 'emailAddress', 'address', 'department'];
  dataSource: MatTableDataSource<Customer>;
  customers: Customer[] = [
    { customerId: '001', fullName: 'John Smith', lastName: 'Smith', phoneNumber: '555-1234', emailAddress: 'john@example.com', address: '123 Main St', department: 'Sales' },
    { customerId: '002', fullName: 'Jane Doe', lastName: 'Doe', phoneNumber: '555-5678', emailAddress: 'jane@example.com', address: '456 Elm St', department: 'Marketing' },
    { customerId: '003', fullName: 'Bob Johnson', lastName: 'Johnson', phoneNumber: '555-9101', emailAddress: 'bob@example.com', address: '789 Oak Ave', department: 'HR' },
    { customerId: '004', fullName: 'Alice Lee', lastName: 'Lee', phoneNumber: '555-2345', emailAddress: 'alice@example.com', address: '246 Pine St', department: 'IT' },
    { customerId: '005', fullName: 'Tom Anderson', lastName: 'Anderson', phoneNumber: '555-6789', emailAddress: 'tom@example.com', address: '135 Cedar St', department: 'Finance' }
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.customers);
  }
}
