import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder,private router:Router) { }
  form: FormGroup;

  ngOnInit(): void {
    this.createControls()
  }

  createControls() {
    this.form = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  loginForm(){
   if(this.form.value.userName=='yogesh'&&this.form.value.password=='12345'){
    Swal.fire({
      icon: 'success',
      title:'Welcome',
      text: 'Your Login Successfully',
      timer:2500
    })
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ');
    localStorage.setItem('user','admin')
this.router.navigate(['/'])
this.form.reset()
   }else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Username and Password Does Not Match!',
      timer:2500
    })
   }
  }
  hasError(fieldName, validationName) {
    return this.form.get(fieldName)?.touched && this.form.get(fieldName)?.hasError(validationName);
  }

  forgotPassword(){
    this.router.navigate(['/forgot-password'])
  }
}
