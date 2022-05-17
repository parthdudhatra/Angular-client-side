import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public signupForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname : ['', Validators.required ],
      email : ['', Validators.required],
      mobile : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  signup(){
    this.http.post<any>('http://localhost:3000/signupUsers',this.signupForm.value)
    .subscribe((res)=> {
      alert("SignUp SuccessFully");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }
}
