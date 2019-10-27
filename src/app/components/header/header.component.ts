import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentDate: Date;

  public constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  public ngOnInit(): void {
    // this.currentDate = new Date();
  }

  // public printTime() {
  //   var currentDate = new Date();
    // var year = currentDate.getFullYear();
    // var month = currentDate.getMonth();
    // var date = currentDate.getDate();
    // var hours = currentDate.getHours();
    // var minutes = currentDate.getMinutes();
    // var seconds = currentDate.getSeconds();
    // console.log(hours +":"+ minutes +":"+ seconds);
  // }

}
