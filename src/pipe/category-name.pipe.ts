import { Pipe, PipeTransform } from '@angular/core';
import { CropNames } from "../constants";

@Pipe({
  name: 'categoryName',
  standalone: true
})
export class CategoryNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'unclassified') {
      return '미분류 그룹';
    } else {
      return value;
    }
  }
}

