import { Component,Input} from '@angular/core';
import {DataService, Box } from '../data.service';

@Component({
  selector: 'app-gchild',
  templateUrl: './gchild.component.html',
  styleUrls: ['./gchild.component.css']
})
export class GchildComponent {

  @Input() box!:Box;
  @Input() isSelected: boolean = false;
  isHighlighted:boolean=false
  constructor(public dataService: DataService) {}  
  ngOnInit(){
   this.dataService.getSelectedBox().subscribe((selectedBox) =>{
     this.isSelected=selectedBox===this.box;
   });
   this.dataService.highlightedBox$.subscribe((highlightedBox)=>{
     this.isHighlighted=highlightedBox===this.box;
   }); 

  }
  onBoxClick() {
    this.isSelected = !this.isSelected;
    this.dataService.setSelectedBox(this.isSelected?this.box:null);
    this.toggleHighlight();
  } 

  onclearBox() {
     this.dataService.deleteBox(this.box);
   }
   onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Delete') {
      this.onclearBox();
    }
  }

   toggleHighlight(){
     this.dataService.toggleBoxHighlight(this.box);
   }

}