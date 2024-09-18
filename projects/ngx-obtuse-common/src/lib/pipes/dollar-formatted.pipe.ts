import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dollarFormatted', standalone: true })
export class DollarFormattedPipe implements PipeTransform {
  transform(input: number): string {
    const rval: string =
      input === null || input === undefined
        ? 'Null'
        : '$' + input.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return rval;
  }
}
