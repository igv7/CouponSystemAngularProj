import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  company: any = {};

  coupon: any = {};

  customer: any = {};

  income: any = {};

  companies = [];

  coupons = [];

  customers = [];

  incomes = [];
}
