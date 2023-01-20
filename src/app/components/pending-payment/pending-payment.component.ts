import { Component, OnInit } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { studentList } from '../../mockData';
import { CandidateService } from '../../services/candidate.service';
declare var window: any;
@Component({
  selector: 'app-pending-payment',
  templateUrl: './pending-payment.component.html',
  styleUrls: ['./pending-payment.component.scss']
})
export class PendingPaymentComponent implements OnInit {
studentList:any[]=[];
formModal: any;
today=new Date().toLocaleDateString()
currentCustomer:any
  constructor(private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.studentList=studentList;
    console.log("student lsi",this.studentList)
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal'),
      {backdrop: 'static', keyboard: false}
    );
  }
   filename=`student Reports ${new Date().toLocaleString()}`

  changedCriteria(value){
    this.candidateService.getCandidateFilteredData(value).subscribe(res=>{
      console.log(res)
    })
  }

  openDialog(data){
    this.currentCustomer=data;
    console.log("curent customer is",data)
    this.formModal.show()
  }

changedStatus(value){
  console.log("updated status is",value)
  this.candidateService.updateCustomerStatus(this.currentCustomer.id,value).subscribe(res=>{
    console.log(res)
  })
  this.formModal.hide()
}
selectedWeek(data){
  console.log("selectd week is",data)
}

  exportDetails(){
    console.log("export Deatils")
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Students Report',
      useBom: true,
      // noDownload: true,
      headers: ["id","name", "email", "mobile","paymentAmount","paymentStatus"]
    };

   new  ngxCsv(this.studentList, this.filename, options);

  }
}
