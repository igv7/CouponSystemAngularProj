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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CompanyFilterPipe } from './components/pipes/company-filter.pipe';
import { CustomerFilterPipe } from './components/pipes/customer-filter.pipe';
import { CouponFilterPipe } from './components/pipes/coupon-filter.pipe';
import { IncomeFilterPipe } from './components/pipes/income-filter.pipe';
import { CouponIdComponent } from './components/coupon-id/coupon-id.component';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './services/auth.service';
import { AdminGuardService } from './services/admin-guard.service';
import { CompanyGuardService } from './services/company-guard.service';
import { CustomerGuardService } from './services/customer-guard.service';
import { LoginService } from './services/login.service';
import { ExitAdminGuardService } from './services/exit-admin-guard.service';
import { ExitCompanyGuardService } from './services/exit-company-guard.service';
import { ExitCustomerGuardService } from './services/exit-customer-guard.service';
import { CompanyIdComponent } from './components/company-id/company-id.component';
import { IncomeCompanyIdComponent } from './components/income-company-id/income-company-id.component';
import { IncomeDetailsIdComponent } from './components/income-details-id/income-details-id.component';
import { CustomerIdComponent } from './components/customer-id/customer-id.component';
import { IncomeCustomerIdComponent } from './components/income-customer-id/income-customer-id.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, HomeComponent, CouponsComponent, CustomerComponent, CompanyComponent, AdminComponent, AboutComponent, Page404Component, ThumbnailComponent, CouponDetailsComponent, AddCouponTestComponent, AddCouponComponent, AddCompanyComponent, UpdateCompanyComponent, DeleteCompanyComponent, ViewCompanyComponent, ViewAllCompaniesComponent, ViewIncomeByCompanyComponent, AddCustomerComponent, UpdateCustomerComponent, DeleteCustomerComponent, ViewCustomerComponent, ViewAllCustomersComponent, ViewIncomeByCustomerComponent, ViewAllIncomeComponent, UpdateCouponComponent, DeleteCouponComponent, ViewCouponComponent, ViewAllCouponsComponent, ViewAllCouponsByTypeComponent, ViewAllCouponsByPriceComponent, ViewAllCouponsByDateComponent, PurchaseCouponComponent, ViewAllPurchasedCouponsComponent, ViewAllPurchasedCouponsByTypeComponent, ViewAllPurchasedCouponsByPriceComponent, ViewCompanyIncomeComponent, ViewCustomerIncomeComponent, CompanyDetailsComponent, CustomerDetailsComponent, CompanyFilterPipe, CustomerFilterPipe, CouponFilterPipe, IncomeFilterPipe, CouponIdComponent, LoginComponent, CompanyIdComponent, IncomeCompanyIdComponent, IncomeDetailsIdComponent, CustomerIdComponent, IncomeCustomerIdComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, AdminGuardService, ExitAdminGuardService, CompanyGuardService, ExitCompanyGuardService, CustomerGuardService, ExitCustomerGuardService, LoginService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
