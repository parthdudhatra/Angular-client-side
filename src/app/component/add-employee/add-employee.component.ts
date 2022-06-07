import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmoployeeServiceService } from '../../service/emoployee-service.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  formvalve !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private ngZone: NgZone,
    private api : EmoployeeServiceService
  ) {
    this.formvalve = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
   }

  ngOnInit(): void {
  }
  onSubmit() : any {
    this.api.AddEmployee(this.formvalve.value)
      .subscribe(() => {
        console.log("Data added successfully")
        this.ngZone.run(()=> this.router.navigateByUrl('/employee-list'))
      }, (err) => {
        console.log(err)
      })
  }

  clickAddEmpoye(){
    this.formvalve.reset();
    this.showAdd = true;
    this.showUpdate = false
  }
}
