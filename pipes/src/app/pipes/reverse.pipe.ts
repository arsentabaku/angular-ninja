import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): any {
    return value.split('').reverse().join('');
  }
}
