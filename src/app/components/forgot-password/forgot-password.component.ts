import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CandidateService } from '../../services/candidate.service';
declare var window: any;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  formModal: any;
  formModal2: any;

  constructor(private candidateService:CandidateService,private formBuilder: FormBuilder,private router:Router) {}
  form: FormGroup;
  resetPasswordForm:FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]]
    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal'),
      {backdrop: 'static', keyboard: false}
    );
    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('myModal2'),
      {backdrop: 'static', keyboard: false}
    );
    this.formModal.show()
    this.setControlsResetPasswordForm()
  }

  setControlsResetPasswordForm(){
    this.resetPasswordForm = this.formBuilder.group({
      password:["",[Validators.required]],
      confirm_password:["",[Validators.required]]
    },{validator: this.passwordMatchValidator}
    )
  }
  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['confirm_password'].value ? null : {'mismatch': true};
  }
  resetPassword(){
    this.candidateService.resetAdminPassword(this.resetPasswordForm.value).subscribe((res)=>{
      if(res){
        this.formModal2.hide()
this.router.navigate(['./login'])
      }
    })
   console.log(this.resetPasswordForm.value)
  }
  hasPasswordError(fieldName, validationName) {
    return this.resetPasswordForm.get(fieldName)?.touched && this.resetPasswordForm.get(fieldName)?.hasError(validationName);
  }

  hasError(fieldName, validationName) {
    return this.form.get(fieldName)?.touched && this.form.get(fieldName)?.hasError(validationName);
  }

  submitEmail(){
    this.candidateService.verifyEmailAddress(this.form.value.email).subscribe((resp)=>{
      console.log(resp)
      if(resp){
        this.formModal.hide();
        this.formModal2.show()
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your Email Address is Not Matched ! Please Enter correct Email',
          timer:3000
        })
      }
    })
  }

}
