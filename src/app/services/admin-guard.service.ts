import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  state: RouterStateSnapshot;

  public canActivate(r: ActivatedRouteSnapshot, s: RouterStateSnapshot): boolean {
    if (this.loginService.getAdminUser() === true) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }

  }

}




// export class AdminGuardService implements CanActivate {

//   public constructor(private loginService: LoginService, private router: Router) {}

//   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if(this.loginService.type === "ADMIN" && this.loginService.isLoggedIn) {
//       return true;
//     }

//     this.router.navigate(["/login"]);

//     return false;
//   }
  
// }
