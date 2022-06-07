import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable , Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router : Router) { }

  signup(data) : Observable<any>{
    return this.http.post('http://localhost:8080/auth/signup', data)
  }
  login(data) : Observable<any>{
    return this.http.post('http://localhost:8080/auth/login', data)
  }
  getProfile(data) : Observable<any>{
    let header = {
      'Authorization' : "Bearer" + localStorage.getItem('token')
    }
    return this.http.get('http://localhost:8080/auth/profile', { headers :header})
  }
}
