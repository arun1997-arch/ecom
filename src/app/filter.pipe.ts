import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value || !searchText) {
      return value;
    }
    
    searchText = searchText.toLowerCase();
    
    return value.filter(item => 
      JSON.stringify(item).toLowerCase().includes(searchText)
    );
  }
}