import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-all-coupons',
  templateUrl: './view-all-coupons.component.html',
  styleUrls: ['./view-all-coupons.component.css']
})
export class ViewAllCouponsComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }

  public coupons: Coupon[];

  listFilter: string = "";
  showImage: boolean = false;
  // public show: boolean = false;
  // public showImage: any = "Show"

  public constructor(private companyService: CompanyService) { }

  public ngOnInit(): void {
    this.companyService.getAllCoupons().subscribe((coupons) => {
      setTimeout(() => this.coupons = coupons, 500);
    }, err => {
      alert("Error: " + err.message);
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
