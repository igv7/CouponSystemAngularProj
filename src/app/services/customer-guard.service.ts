import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuardService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.loginService.type === "CUSTOMER" && this.loginService.isLoggedIn) {
      return true;
    }

    this.router.navigate(["/login"]);

    return false;
  }
  
}
