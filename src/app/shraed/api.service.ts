import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { EmployeeModel } from '../emoployee-dashboard/employee-dashborad.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmploye(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  // getEmploye(empId?: string) {
  //   let url = empId ? '/' + empId : '';
  //   return this.http.get<any>(`http://localhost:3000/posts${url}`)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }))
  // }

  getEmploye(){
    // let url = empId ? '/' + empId : ''
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateEmploye(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  DeteteEmploye(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
