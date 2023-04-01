import { Component, OnInit } from '@angular/core';
export interface Customer {
  LoanId: string;
  CustomerName: string;
  LoanType: string;
  Installments: number;
  Roi: number;
  TotalAmount: number;
  PendingAmount: number;
  LoanStatus:string
}
@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  displayedColumns: string[] = ['Loan Id', 'Customer Name', 'Loan Type', 'Installments', 'Roi', 'Total Amount', 'Pending Amount','Loan Status'];
  constructor() { }

  ngOnInit(): void {
  }

}
