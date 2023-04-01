import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface payment {
PaymentId:string;
CustomerId:string;
CustomerName:string;
Amount:number;
Tax:number;
Mode:string;
Date:Date;
Notes:string

}
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

 

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Payment Id', 'Customer Id', 'Customer Name', 'Amount', 'Tax', 'Mode', 'Date','Notes'];
  dataSource: MatTableDataSource<payment>;
  customers: payment[] = [
   
  ];

  constructor() {
    this.dataSource = new MatTableDataSource(this.customers);
  }

}
