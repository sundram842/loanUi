import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, { path: 'lone', loadChildren: () => import('./lone/lone.module').then(m => m.LoneModule) }, { path: 'plans', loadChildren: () => import('./plans/plans.module').then(m => m.PlansModule) }, { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }, { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
