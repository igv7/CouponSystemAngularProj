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
    // alert(`
    // Id: ${this.coupon.id}
    // `);

    this.companyService.deleteCoupon(this.coupon.id).subscribe((coupon) => {
      console.log(`Success on delele Coupon Id: `,this.coupon.id = coupon.id);
        alert(`Coupon Id: ${coupon.id} Title: `+coupon.title+ ` has been succesfully deleted!`);
        this.router.navigate(["/company/view-all-coupons"]);
    }, err => {
      console.log(`Failed on delele Coupon Id: `,this.coupon.id + `\n` +err.message);
      alert(`Error on delete Coupon! Wrong Id: ${this.coupon.id}` +` `+ `\n`+err.message);
    });
  }

  public cancelDelete(): void {
    this.router.navigate(["/company"]);
  }

}
