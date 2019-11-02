import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  public addCoupon():void {
    alert(`
    Id: ${this.coupon.id}
    Title: ${this.coupon.title}
    StartDate: ${this.coupon.startDate}
    EndDate: ${this.coupon.endDate}
    Amount: ${this.coupon.amount}
    Type: ${this.coupon.type}
    Message: ${this.coupon.message}
    Price: ${this.coupon.price}
    Image: ${this.coupon.image}
    `);

    this.companyService.addCoupon(this.coupon).subscribe(c => {
      alert("Coupon has been succesfully added! Title: " + c.title);
    }, err => {
      alert("Error on add Coupon!" + err);
    });
  }

}
