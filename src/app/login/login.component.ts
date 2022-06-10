import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
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
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private api: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.api.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          alert(res.message)
          localStorage.setItem("token", res.token);
          this.loginForm.reset();
          this.router.navigate(["/employee-list"]);
        },
        err => {
          alert('Login not successfully')
          console.log(err);
        });
      }
    }
}
