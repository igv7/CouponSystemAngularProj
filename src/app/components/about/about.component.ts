import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public showImage(imageSource: string): void {
    alert("User clicked on image... Image source: " + imageSource);
  }

  constructor() { }

  ngOnInit() {
  }

}
