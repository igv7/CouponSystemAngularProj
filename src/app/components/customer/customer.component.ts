import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public constructor(private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Customer Page");
  }

}
