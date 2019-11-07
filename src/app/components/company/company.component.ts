import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/services/exit-company-guard.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, ComponentCanDeactivate {
  saved: boolean = false;
  save() {
    this.saved = true;
  }
  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved && this.loginService.isLoggedIn == false) {
      return confirm("Are You sure You want to exit?");
    }
    else {
      return true;
    }
  }

  public constructor(private title: Title, private loginService: LoginService, private router: Router) { }

  public ngOnInit(): void {
    this.title.setTitle("Company Page");
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }

}
