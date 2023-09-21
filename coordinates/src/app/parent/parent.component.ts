import { Component } from '@angular/core';
import { DataService,Box } from '../data.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  
  selectedBox: Box | null = null;
  highlightedBox$:Observable<Box | null>;
  constructor(public dataService: DataService ,private location: Location) {
    this.highlightedBox$=this.dataService.highlightedBox$;
  }

  createBox(event: MouseEvent){
    event.preventDefault();
    event.stopPropagation();
    const container = document.querySelector('.parent-container')as HTMLElement;
    const containerRect=container.getBoundingClientRect();
    const boxSize = 25; 

    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

  if(x < 0 || y < 0 || x + boxSize > containerRect.width || y + boxSize > containerRect.height) {
    return;
  } 

  const newBox : Box = { x,y,size:boxSize};
 /* if(this.isBoxOverlapping(newBox, this.dataService.getBoxes())) {
    return;
  }*/
  this.location.go(`/parent/x=${newBox.x}&y=${newBox.y}`);

  this.dataService.addBox(newBox);
  }
  onDoubleClick(event:MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
  /*isBoxOverlapping(newBox: Box, boxes:Box[]): boolean {
    for (const box of this.dataService.getBoxes()) {
      
        const BoxOverlappingX = newBox.x+ newBox.size > box.x && box.x + box.size > newBox.x;
        const BoxOverlappingY = newBox.y+ newBox.size > box.y && box.y + box.size > newBox.y;
        if(BoxOverlappingX && BoxOverlappingY){
        return true;
      }
    }
    return false;
  }*/

  deleteBox(box: Box) {
    this.dataService.deleteBox(box);
  }
  
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Delete'&& this.selectedBox) {
      this.deleteBox(this.selectedBox);
    }
  }
  toggleBorder(event: MouseEvent,box: Box) {
    event.stopPropagation();
    if (this.selectedBox === box) {
      
      this.selectedBox = null;
    } else {
      
      this.selectedBox = box;
    }
    this.dataService.setSelectedBox(this.selectedBox);
  
  }
}

