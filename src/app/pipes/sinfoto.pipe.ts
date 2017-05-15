import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) {
      return 'assets/img/noimage.png';
    }

    return null;
  }

}