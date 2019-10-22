import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currentDiscount: number;
  public currentDate: Date;
  public imageWidth: number;
  public isWinter: boolean;
  public coupons = ["Food", "Restaurants", "Traveling"];

  constructor() { }

  public ngOnInit(): void {
    this.currentDiscount = 10;
    this.currentDate = new Date();
    this.imageWidth = 800;
    const month = this.currentDate.getMonth() + 1;
    this.isWinter = month >= 11 || month <= 3;
  }

  public decreaseWidth(): void {
    this.imageWidth -= 10;
  }

  public resetWidth(): void {
    this.imageWidth = 800;
  }

  public increaseWidth(): void {
    this.imageWidth += 10;
  }

}
