
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmoployeeServiceService } from 'src/app/service/emoployee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  getId:any;
  viewForm!:FormGroup;
  showAddEmployee : true;
  readonly : boolean = true;
  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private Api:EmoployeeServiceService
  ) {
    this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.Api.getEmployee(this.getId).subscribe(res=>{
        this.viewForm.setValue({
          firstName:res['firstName'],
          lastName:res['lastName'],
          email:res['email'],
          mobile : res['mobile'],
          salary:res['salary']
      })

      });
      this.viewForm= this.formBuilder.group({
        firstName:[''],
        lastName:[''],
        email:[''],
        mobile:[''],
        salary:['']
      })
   }

  ngOnInit(): void {

  }
  onView(){}
}
