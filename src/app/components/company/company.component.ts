import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public constructor(private title: Title, private loginService: LoginService, private router: Router) { }

  public ngOnInit(): void {
    this.title.setTitle("Company Page");
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }

}
