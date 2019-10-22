import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public constructor(private title: Title) { }

  public ngOnInit(): void {
    this.title.setTitle("Company Page");
  }

}
