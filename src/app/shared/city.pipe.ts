import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): any {

    let short, long;

    switch(value) {
      case 'München':
        short = 'MUC';
        long = 'Munich Airport International Franz-Joseph Strauß'
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Hamburg Airport Helmut Schmidt';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Graz Thalerhof';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'long') {
      return long;
    }
    return short;

  }

}
