import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-coupons-by-type',
  templateUrl: './view-all-coupons-by-type.component.html',
  styleUrls: ['./view-all-coupons-by-type.component.css']
})
export class ViewAllCouponsByTypeComponent implements OnInit {

  public coupon = new Coupon();
  public coupons: Coupon[];
  showImage: boolean = false;

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public viewAllCouponsByType(type: string): void {
    this.companyService.viewAllCouponsByType(type).subscribe((coupons) => {
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
        }, err => {
          console.log(`Failed on get all Coupons by Type: `,type + `\n` +err.message);
          alert(`Error on get all Coupons by Type! Type: ${type}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  public closeList(): void {
    this.router.navigate(["/company"]);
  }

}
