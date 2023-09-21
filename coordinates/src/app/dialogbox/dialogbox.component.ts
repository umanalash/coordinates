import { Component,Output,EventEmitter } from '@angular/core';
import { DataService,Box } from '../data.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {
  @Output() dialogClosed = new EventEmitter<void>();

  valueX:number = 0;
  valueY:number = 0;

  hideDialogbox=true;

  constructor(public dataService: DataService ) {}

  displayResults() {
    const newBox:Box ={
      x:this.valueX,
      y:this.valueY,
      size:25,
      
    };
    this.dataService.addBox(newBox);
    this.hideDialogbox=false;

  }
  closeDialog() {
    this.hideDialogbox = false;
  }
}
