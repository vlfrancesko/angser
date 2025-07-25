import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upFirst',
  standalone: true,
})
export class UpFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
