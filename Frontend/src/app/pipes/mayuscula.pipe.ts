import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'aumentoPipe'
})
export class AumentoPipe implements PipeTransform {

  transform(value: string, args: string[]): any {
    let number = Number.parseInt(value);
    let unoPc = number / 100;
    return number + (unoPc * 25);
  }
  
}