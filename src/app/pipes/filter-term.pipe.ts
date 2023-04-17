import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(items: string[], searchTerm: string = ''): string[] {
    return items.filter((item) => item.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()));
  }

}
