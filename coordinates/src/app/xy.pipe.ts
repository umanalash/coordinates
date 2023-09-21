import { Pipe, PipeTransform } from '@angular/core';

interface Box {
  x:number;
  y:number;
}
@Pipe({ name: 'xyPipe' })
export class xyPipe implements PipeTransform {
  transform(box:Box): string {
    return `X: ${box.x}, Y: ${box.y}`;
  }
}
