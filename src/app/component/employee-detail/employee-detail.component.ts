import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmoployeeServiceService } from 'src/app/service/emoployee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  getId : any;
  updateForm : FormGroup
  constructor(
    private api : EmoployeeServiceService,
    private router : Router,
    private ngZone : NgZone,
    private Activerouter : ActivatedRoute,
    private formBuilder : FormBuilder
    ) {
      this.getId = this.Activerouter.snapshot.paramMap.get('id');
      this.api.getEmployee(this.getId).subscribe(res => {
        this.updateForm.setValue({
          firstName : res['firstname'],
          lastName: res['lastName'],
          email: res['email'],
          mobile: res['mobile'],
          salary: res['salary']
        })
      });
      this.updateForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        mobile: [''],
        salary: ['']
      })
    }

  ngOnInit(): void {
  }

  onUpdate(){
    this.api.updateEmployee(this.getId, this.updateForm.value).subscribe(res =>{
      console.log("Data Updated Success Full");
      this.ngZone.run(() => { this.router.navigateByUrl('/employee-list')})
    },(err) => {
      console.log(err)
    })
  }
}
