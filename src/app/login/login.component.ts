import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shraed/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm !: FormGroup
  constructor(
    private formBuilder : FormBuilder,
     private http : HttpClient,
     private router : Router,
     private api : ApiService ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }
  login(){
    const data = this.loginForm.value
    this.api.login(data)
      .subscribe((res) => {
        if(res.Success){
          alert(res.message)
        }else {
          alert(res.message)
        }
      })
      this.loginForm.reset();
      this.router.navigate(['add-employee'])
    // this.http.get<any>("http://localhost:3000/signupUsers")
    // .subscribe((res) => {
    //   const user = res.find((a : any) => {
    //     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //   })
    //   if(user){
    //     alert("Login Success");
    //     this.loginForm.reset();
    //     this.router.navigate(['dashborad'])
    //   }
    //   else{
    //     alert("User Not Found")
    //   }
    // })
  }

}
