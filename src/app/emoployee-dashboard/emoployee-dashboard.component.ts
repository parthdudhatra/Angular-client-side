import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashborad.model';
import { ApiService } from '../shraed/api.service'

@Component({
  selector: 'app-emoployee-dashboard',
  templateUrl: './emoployee-dashboard.component.html',
  styleUrls: ['./emoployee-dashboard.component.css']
})
export class EmoployeeDashboardComponent implements OnInit {

  formvalve !: FormGroup;
  totalRecords: any;
  page  = 1;
  EmployeeData = [];
  showAdd !: boolean;
  showUpdate !: boolean;
  EmployeeModelObj = new EmployeeModel
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService

  ) {
    this.EmployeeData = new Array<any>()
   }

  ngOnInit(): void {
    this.formvalve = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getAllEmployee()
  }

  clickAddEmpoye(){
    this.formvalve.reset();
    this.showAdd = true;
    this.showUpdate = false
  }

  postEmployeeDetails() {
    this.EmployeeModelObj.firstName = this.formvalve.value.firstName;
    this.EmployeeModelObj.lastName = this.formvalve.value.lastName;
    this.EmployeeModelObj.email = this.formvalve.value.email;
    this.EmployeeModelObj.mobile = this.formvalve.value.mobile;
    this.EmployeeModelObj.salary = this.formvalve.value.salary;

    this.api.postEmploye(this.EmployeeModelObj).subscribe({
      next: (res) => {
        console.log("<<<----res---->>>>", res);
        alert('Employee Added Successfully');
        let ref = document.getElementById('close')
        ref?.click()
        this.formvalve.reset();
        this.getAllEmployee()
      },
      error: (e) => console.error(e),
    });
  }

  getAllEmployee(){
    this.api.getEmploye().subscribe((res: any) => {
      this.EmployeeData = res;
      console.log(res);
      this.totalRecords = res.length
      console.log(",,,,", this.totalRecords)
    })
  }

  // getAllEmployee() {
  //   this.api.getEmploye().subscribe((res: EmployeeModel[] | Object) => {
  //     debugger
  //     if (typeof res === 'object') {
  //       this.EmployeeData.push(...res as any);
  //     } else
  //       this.EmployeeData = res;
  //   })
  //   console.log(this.EmployeeData)
  // }

  deleteEmployee(i : any){
    this.api.DeteteEmploye(i.id).subscribe((res) => {
      alert("Employee Detail Deleted")
      this.getAllEmployee()
    })
  }
  
  onEdit(i : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.EmployeeModelObj.id =  i.id
    this.formvalve.controls['firstName'].setValue(i.firstName);
    this.formvalve.controls['lastName'].setValue(i.lastName);
    this.formvalve.controls['email'].setValue(i.email);
    this.formvalve.controls['mobile'].setValue(i.mobile);
    this.formvalve.controls['salary'].setValue(i.salary);
  }
  updateEmployeeDetails(){
    this.EmployeeModelObj.firstName = this.formvalve.value.firstName;
    this.EmployeeModelObj.lastName = this.formvalve.value.lastName;
    this.EmployeeModelObj.email = this.formvalve.value.email;
    this.EmployeeModelObj.mobile = this.formvalve.value.mobile;
    this.EmployeeModelObj.salary = this.formvalve.value.salary;

    this.api.updateEmploye(this.EmployeeModelObj, this.EmployeeModelObj.id).subscribe((res)=> {
      alert("updated succesfully")
      let ref = document.getElementById('close')
      ref?.click()
      this.formvalve.reset();
      this.getAllEmployee()
    })
  }
}
