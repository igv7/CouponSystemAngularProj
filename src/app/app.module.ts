import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from "@angular/forms";
import { CouponsComponent } from './components/coupons/coupons.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CompanyComponent } from './components/company/company.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { HttpClientModule } from "@angular/common/http";
import { CouponDetailsComponent } from './components/coupon-details/coupon-details.component';
import { AddCouponComponent } from './components/add-coupon/add-coupon.component';
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

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, CouponsComponent, CustomerComponent, CompanyComponent, AdminComponent, AboutComponent, Page404Component, ThumbnailComponent, CouponDetailsComponent, AddCouponComponent, AddCompanyComponent, UpdateCompanyComponent, DeleteCompanyComponent, ViewCompanyComponent, ViewAllCompaniesComponent, ViewIncomeByCompanyComponent, AddCustomerComponent, UpdateCustomerComponent, DeleteCustomerComponent, ViewCustomerComponent, ViewAllCustomersComponent, ViewIncomeByCustomerComponent, ViewAllIncomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
