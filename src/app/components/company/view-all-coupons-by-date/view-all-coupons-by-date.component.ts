import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-coupons-by-date',
  templateUrl: './view-all-coupons-by-date.component.html',
  styleUrls: ['./view-all-coupons-by-date.component.css']
})
export class ViewAllCouponsByDateComponent implements OnInit {

  public coupon = new Coupon();
  public coupons: Coupon[];
  showImage: boolean = false;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public viewAllCouponsByDate(endDate: string): void {
    this.companyService.viewAllCouponsByDate(endDate).subscribe((coupons) => {
      // if(this.coupon.endDate < endDate) {
      //   err => {
      //     alert(`Error on get all Coupons by Date! There are no coupons up to the indicated Date: ${endDate}` + ` `
      //     + `\n`+err.message);
      //   }
      // }
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
        }, err => {
          console.log(`Failed on get all Coupons by Date: `,endDate + `\n` +err.message);
          alert(`Error on get all Coupons by Date! There are no coupons up to the indicated Date: ${endDate}` + ` `
          + `\n`+err.message);
        });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  public closeList(): void {
    this.router.navigate(["/company"]);
  }

}
