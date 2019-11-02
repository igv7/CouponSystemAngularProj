import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private companyService: CompanyService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public deleteCoupon():void {
    alert(`
    Id: ${this.coupon.id}
    `);

    this.companyService.deleteCoupon(this.coupon.id).subscribe((coupon) => {
      alert("Coupon has been succesfully deleted! ID: " + coupon.id);
      this.router.navigate(["/company/view-all-coupons"]);
    }, err => {
      alert("Error on delete Coupon!" + err);
    });
  }

  public cancelDelete(): void {
    this.router.navigate(["/company"]);
  }

}
