import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public constructor(private title: Title, private loginService: LoginService, private router: Router) { }

  public ngOnInit(): void {
    this.title.setTitle("Customer Page");
  }

  public logout() {
    this.loginService.logout();
    this.router.navigate(["/home"]);
  }

}
