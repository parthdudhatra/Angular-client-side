
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
  getId:any;
  updateForm!:FormGroup;
  showAddEmployee : true
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private Api:EmoployeeServiceService) {
      this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.Api.getEmployee(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          firstName:res['firstName'],
          lastName:res['lastName'],
          email:res['email'],
          mobile : res['mobile'],
          salary:res['salary']
      })

      });
      this.updateForm= this.formBuilder.group({
        firstName:[''],
        lastName:[''],
        email:[''],
        mobile:[''],
        salary:['']
      })
    }

  ngOnInit(): void {}
  onUpdate(){
    this.Api.updateEmployee(this.getId,this.updateForm.value).subscribe(res=>{
      console.log("Data updated Sucessful!");
      this.ngZone.run(()=>{this.router.navigateByUrl('/employee-list')})
    // },(err)=>{
    //   console.log(err)
    });
  }


}
