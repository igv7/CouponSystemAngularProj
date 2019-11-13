import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-coupons-by-price',
  templateUrl: './view-all-coupons-by-price.component.html',
  styleUrls: ['./view-all-coupons-by-price.component.css']
})
export class ViewAllCouponsByPriceComponent implements OnInit {

  public coupon = new Coupon();
  public coupons: Coupon[];
  showImage: boolean = false;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public viewAllCouponsByPrice(price: number): void {
    this.companyService.viewAllCouponsByPrice(price).subscribe((coupons) => {
      // if(this.coupon.price < price) {
      //   err => {
      //     alert(`Error on get all Coupons by Price! There are no coupons up to the indicated Price: ${price}` + ` `
      //     + `\n`+err.message);
      //   }
      // }
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
        }, err => {
          console.log(`Failed on get all Coupons by Price: `,price + `\n` +err.message);
          alert(`Error on get all Coupons by Price! There are no coupons up to the indicated Price: ${price}` + ` `
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
