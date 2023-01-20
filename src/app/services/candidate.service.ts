import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {
paymentAmount=new BehaviorSubject(0);
paymentAmount$=this.paymentAmount.asObservable();
  constructor(private http:HttpClient) { }

  verifyEmailAddress(data){
    console.log("inside service",data)
    return of(true)
  }

  resetAdminPassword(data){
    console.log("dat in service",data)
    return of(true)
  }

  getCandidateFilteredData(data){
    console.log("inside service",data)
    return of([])
  }
  updateCustomerStatus(customer,status){
    console.log("inside service",customer,status)
    return of([])
  }
}
