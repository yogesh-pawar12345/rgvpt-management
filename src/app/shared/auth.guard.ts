import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){}


  canActivate() {
console.log("is loged ==>",this.auth.isLoggedIn())

if(this.auth.isLoggedIn()){
  return true;
}else {
  Swal.fire({
    title:'OOPS !',
    text:'You Are Not Loged In User',
    icon:'error',
    timer:2000
  },'error')
  this.router.navigate(['login']);

  return false;
}

  }



}
