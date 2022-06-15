import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from './emoployee'
@Injectable({
  providedIn: 'root'
})
export class EmoployeeServiceService {
  //Node Api
  REST_API : string = 'http://localhost:8080/auth';

  //Set http Headers
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private httpClient : HttpClient) { }

  //add Employee
  AddEmployee(data : Employee): Observable<any>{
    let APT_URL =  `${this.REST_API}/add-employee`;
    return this.httpClient.post(APT_URL,data).pipe(catchError(this.handleError))
  }

  // Get All Employee Details
  getEmployees(){
    return this.httpClient.get(`${this.REST_API}`)
  }

  //get Single Employee
  getEmployee(id:any):Observable<any>{
    let API_URL=`${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res||{}
    }),
    catchError(this.handleError)
    )
  }

  updateEmployee(data:any,id:any):Observable<any>{
    let API_URL=`${this.REST_API}/${id}`;
    return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  deleteEmployee(id : any):Observable<any>{
    let APT_URL = `${this.REST_API}/delete-employee/${id}`;
    return this.httpClient.delete(APT_URL, { headers : this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
  }

  //Error
  handleError(error : HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Handle client error
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage);
  }
}
