import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coordinate';
  hover=false;
  showDialogBoxComponent=false;
  
  showOff(){
    this.hover = true;
  }
  toggleDisplay() {
  this.showDialogBoxComponent=!this.showDialogBoxComponent;
  }
  
  hiddenOff() {
    this.hover = false;
  }
}
