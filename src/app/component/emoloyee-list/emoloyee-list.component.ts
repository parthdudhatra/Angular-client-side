import { Component, OnInit } from '@angular/core';
import { Emoployee } from '../../service/emoployee'
import { EmoployeeServiceService } from 'src/app/service/emoployee-service.service';
@Component({
  selector: 'app-emoloyee-list',
  templateUrl: './emoloyee-list.component.html',
  styleUrls: ['./emoloyee-list.component.css']
})
export class EmoloyeeListComponent implements OnInit {
  totalRecords: any;
  page  = 1;
  EmployeeData : any = []

  // formvalve !: FormGroup;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private api :EmoployeeServiceService) { }

  ngOnInit(): void {
    this.api.getEmployees().subscribe(res => {
      console.log(res);
      this.EmployeeData = res;
    })
  }

  delete(id : any, i : any) {
    console.log(id);
    if(window.confirm("Are you sure want to delete")){
      this.api.deleteEmployee(id).subscribe(res => {
        this.EmployeeData.splice(i , 1)
      })
    }
  }
  clickAddEmpoye(){
    // this.formvalve.reset();
    this.showAdd = true;
    this.showUpdate = false
  }
}
