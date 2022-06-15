import { Component, OnInit } from '@angular/core';
import { EmoployeeServiceService } from 'src/app/service/emoployee-service.service';

@Component({
  selector: 'app-delete-emoloyee',
  templateUrl: './delete-emoloyee.component.html',
  styleUrls: ['./delete-emoloyee.component.css']
})
export class DeleteEmoloyeeComponent implements OnInit {
  EmployeeData : any = []
  constructor(private api : EmoployeeServiceService) {}

  ngOnInit(): void {
  }

  delete(id : any, i : any) {
    console.log(id);
    if(window.confirm("Are you sure want to delete")){
      this.api.deleteEmployee(id).subscribe(res => {
        this.EmployeeData.splice(i , 1)
      })
    }
  }
}
