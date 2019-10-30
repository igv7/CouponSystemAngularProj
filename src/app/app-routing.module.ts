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
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { ViewCouponComponent } from './components/company/view-coupon/view-coupon.component';
import { ViewAllCouponsComponent } from './components/company/view-all-coupons/view-all-coupons.component';
import { ViewAllCouponsByTypeComponent } from './components/company/view-all-coupons-by-type/view-all-coupons-by-type.component';
import { ViewAllCouponsByPriceComponent } from './components/company/view-all-coupons-by-price/view-all-coupons-by-price.component';
import { ViewAllCouponsByDateComponent } from './components/company/view-all-coupons-by-date/view-all-coupons-by-date.component';
import { ViewCompanyIncomeComponent } from './components/company/view-company-income/view-company-income.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { ViewAllPurchasedCouponsComponent } from './components/customer/view-all-purchased-coupons/view-all-purchased-coupons.component';
import { ViewAllPurchasedCouponsByTypeComponent } from './components/customer/view-all-purchased-coupons-by-type/view-all-purchased-coupons-by-type.component';
import { ViewAllPurchasedCouponsByPriceComponent } from './components/customer/view-all-purchased-coupons-by-price/view-all-purchased-coupons-by-price.component';
import { ViewCustomerIncomeComponent } from './components/customer/view-customer-income/view-customer-income.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "coupons", component: CouponsComponent },
  { path: "coupon-details/:id", component: CouponDetailsComponent },
  { path: "add-coupon-test", component: AddCouponTestComponent },
  { path: "customer", component: CustomerComponent, children: [
    { path: "purchase-coupon", component: PurchaseCouponComponent },
    { path: "view-all-purchased-coupons", component: ViewAllPurchasedCouponsComponent },
    { path: "view-all-purchased-coupons-by-type", component: ViewAllPurchasedCouponsByTypeComponent },
    { path: "view-all-purchased-coupons-by-price", component: ViewAllPurchasedCouponsByPriceComponent },
    { path: "view-customer-income", component: ViewCustomerIncomeComponent }
  ]},
  { path: "company", component: CompanyComponent, children: [
      { path: "add-coupon", component: AddCouponComponent },
      { path: "update-coupon", component: UpdateCouponComponent },
      { path: "delete-coupon", component: DeleteCouponComponent },
      { path: "view-coupon", component: ViewCouponComponent },
      { path: "view-all-coupons", component: ViewAllCouponsComponent },
      { path: "view-all-coupons-by-type", component: ViewAllCouponsByTypeComponent },
      { path: "view-all-coupons-by-price", component: ViewAllCouponsByPriceComponent },
      { path: "view-all-coupons-by-date", component: ViewAllCouponsByDateComponent },
      { path: "view-company-income", component: ViewCompanyIncomeComponent }
  ]},
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
