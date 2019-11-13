import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-all-purchased-coupons',
  templateUrl: './view-all-purchased-coupons.component.html',
  styleUrls: ['./view-all-purchased-coupons.component.css']
})
export class ViewAllPurchasedCouponsComponent implements OnInit {

  public coupons: Coupon[];

  listFilter: string = "";
  showImage: boolean = false;
  // public show: boolean = false;
  // public showImage: any = "Show"

  public constructor(private customerService: CustomerService) { }

  public ngOnInit(): void {
    this.customerService.getAllPurchasedCoupons().subscribe((coupons) => {
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
    }, err => {
      console.log(`Failed on get all coupons! `+ `\n` +err.message);
      alert(`Error on get all coupons! ` + `\n` +err.message);
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
