import { Component, OnInit, ViewChild } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public getCoupon():void {
    this.companyService.getCoupon(this.coupon.id).subscribe(coupon=> {
      console.log(`Success! `,
        this.coupon.id = coupon.id, 
        this.coupon.title = coupon.title, 
        this.coupon.startDate = coupon.startDate,
        this.coupon.endDate = coupon.endDate, 
        this.coupon.amount = coupon.amount,
        this.coupon.type = coupon.type, 
        this.coupon.message = coupon.message,
        this.coupon.price = coupon.price, 
        this.coupon.image = coupon.image);
      this.router.navigate(["/company/view-coupon/coupon-id/"+this.coupon.id]);
    }, err => {
      console.log(`Failed on get Coupon Id: `,this.coupon.id + `\n` +err.message);
      alert(`Error on get Coupon! Wrong Id: ${this.coupon.id}` +` `+ `\n`+err.message);
    });
  }

}
