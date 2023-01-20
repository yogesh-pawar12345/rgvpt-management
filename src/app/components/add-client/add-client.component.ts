import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CostType } from '../../model';
import { CandidateService } from '../../services/candidate.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  form: FormGroup;
Amount=0
  constructor(private fb: FormBuilder,private candidateService:CandidateService) {
  }
  createControls(){
    this.form = this.fb.group({
      clientId:[new Date().getTime().toString()],
      fullName: ["",[Validators.required]],
      primaryPhoneNumber:[""],
      secondaryPhoneNumber:[""],
      relationship:[""],
      // secondName: [""],
      // secondPrimaryPhoneNumber:[""],
      // secondSecondaryPhoneNumber:[""],
      // secondRelationship:[""],
      childrens: this.fb.array([])
    })

  }
  selectedChildCostType(){
    this.Amount=0
    this.form.value.childrens.map((curr)=>{
      if(curr.childCostType=="full"){
        this.Amount+=CostType.fullRate
        this.candidateService.paymentAmount.next(this.Amount)
      }else if(curr.childCostType=="midDay"){
        this.Amount+=CostType.midDayRate
        this.candidateService.paymentAmount.next(this.Amount)

      }else if(curr.childCostType=="return"){
        this.Amount+=CostType.ReturnRate
        this.candidateService.paymentAmount.next(this.Amount)

      }
    })

console.log(this.Amount)
  }

  addNewChild() {
    console.log("add new child")
    this.childrens().push(this.newchild());
  }

  childrens(): FormArray {
    return this.form.get('childrens') as FormArray;
  }

  newchild(): FormGroup {
    return this.fb.group({
      name: ["",[Validators.required]],
      dob: ["",[Validators.required]],
      schoolName:["",[Validators.required]],
      childCostType:["",[Validators.required]]
    });
  }
  deleteChild(index: number) {
    console.log("delete index",index)
    const add = this.form.get('childrens') as FormArray;
    add.removeAt(index)
  }

  submitForm(){
    console.log("this form data",this.form.value)
    this.form.reset();
    this.createControls()
    this.addNewChild()
  }
  ngOnInit(): void {
    this.createControls()
    this.addNewChild()
  }
  hasError(fieldName, validationName) {
    return this.form.get(fieldName)?.touched && this.form.get(fieldName)?.hasError(validationName);
  }

}
