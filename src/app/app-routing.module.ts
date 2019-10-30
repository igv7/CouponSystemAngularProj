import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { AddCouponTestComponent } from './components/add-coupon-test/add-coupon-test.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { ViewCompanyComponent } from './components/admin/view-company/view-company.component';
import { ViewAllCompaniesComponent } from './components/admin/view-all-companies/view-all-companies.component';
import { ViewIncomeByCompanyComponent } from './components/admin/view-income-by-company/view-income-by-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './components/admin/view-customer/view-customer.component';
import { ViewAllCustomersComponent } from './components/admin/view-all-customers/view-all-customers.component';
import { ViewIncomeByCustomerComponent } from './components/admin/view-income-by-customer/view-income-by-customer.component';
import { ViewAllIncomeComponent } from './components/admin/view-all-income/view-all-income.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "coupons", component: CouponsComponent },
  { path: "coupon-details/:id", component: CouponDetailsComponent },
  { path: "add-coupon-test", component: AddCouponTestComponent },
  { path: "customer", component: CustomerComponent },
  { path: "company", component: CompanyComponent },
  { path: "admin", component: AdminComponent, children: [
      { path: "add-company", component: AddCompanyComponent },
      { path: "update-company", component: UpdateCompanyComponent },
      { path: "delete-company", component: DeleteCompanyComponent },
      { path: "view-company", component: ViewCompanyComponent },
      { path: "view-all-companies", component: ViewAllCompaniesComponent },
      { path: "view-income-by-company", component: ViewIncomeByCompanyComponent },
      { path: "add-customer", component: AddCustomerComponent },
      { path: "update-customer", component: UpdateCustomerComponent },
      { path: "delete-customer", component: DeleteCustomerComponent },
      { path: "view-customer", component: ViewCustomerComponent },
      { path: "view-all-customers", component: ViewAllCustomersComponent },
      { path: "view-income-by-customer", component: ViewIncomeByCustomerComponent },
      { path: "view-all-income", component: ViewAllIncomeComponent }
  ]},
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: Page404Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
