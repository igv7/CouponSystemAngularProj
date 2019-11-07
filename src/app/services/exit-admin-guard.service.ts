import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

export class ExitAdminGuardService implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate) : Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  constructor() { }
}
