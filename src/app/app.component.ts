import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCURD';
  // showAddEmployee : true;
  showUpdate !: boolean;
  clickAddEmpoye(){
    // this.formvalve.reset();
    // this.showAddEmployee = false;
    // this.showUpdate = false
  }
}
