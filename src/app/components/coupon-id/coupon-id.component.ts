import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-coupon-id',
  templateUrl: './coupon-id.component.html',
  styleUrls: ['./coupon-id.component.css']
})
export class CouponIdComponent implements OnInit {

  public coupon: Coupon;

  public constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }

  public ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe(coupons => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.coupon = coupons.find(c => c.id == id);
    }, err => {
      alert("Error: " + err.message);
    });
    
  }

}
