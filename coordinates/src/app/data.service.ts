import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

export interface Box {
  x: number;
  y: number;
  size:number;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  private boxesNew= new BehaviorSubject<Box[]>([]);
  public boxes = this.boxesNew.asObservable();  

  private selectedBoxSubject = new BehaviorSubject<Box | null>(null);
  public selectedBox$: Observable<Box | null> = this.selectedBoxSubject.asObservable();

  private highlightedBoxSubject = new BehaviorSubject<Box | null>(null);
  public highlightedBox$: Observable<Box | null> = this.highlightedBoxSubject.asObservable();
  selectedBox: Box | null = null;

constructor() {
  const defaultBoxes: Box[]=[
    {x:75, y:89, size:20},
    {x:250, y:339, size:20},
    {x:490, y:569, size:20},
    {x:700, y:778, size:20}
  ];
  this.boxesNew.next(defaultBoxes);
}

  getBoxes():Box[] {
    return this.boxesNew.getValue();
  }

  addBox(box: Box){
    const boxes = this.boxesNew.getValue();
    boxes.push(box);
    this.boxesNew.next(boxes);
  }

  setSelectedBox(box: Box | null) {
    this.selectedBoxSubject.next(box);
  }

  getSelectedBox(): Observable<Box | null> {
    return this.selectedBoxSubject.asObservable();
  }

  toggleBoxHighlight(box: Box) {
    const highlightedBox = this.highlightedBoxSubject.getValue();
    if (highlightedBox === box) {
      this.highlightedBoxSubject.next(null);
    } else {
      this.highlightedBoxSubject.next(box);
    }
  }
 

 
  deleteBox(box: Box) {
    const index = this.getBoxes().indexOf(box);
    if (index !== -1) {
      this.getBoxes().splice(index, 1);
      this.boxesNew.next(this.getBoxes());
    }
  }
  
}




