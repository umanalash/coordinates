import { Component } from '@angular/core';
import { DataService,Box } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  selectedBox: Box | null = null;

  constructor(public dataService: DataService) {}

  deleteBox(box:Box) {
    this.dataService.deleteBox(box);
  }
  toggleBorder(box:Box){
  this.selectedBox=this.selectedBox===box?null:box;
  }
  
}