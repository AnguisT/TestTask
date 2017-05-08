import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, term){
    // console.log(value);
    // console.log(term);
    if (term === undefined){
      return value;
    } else {
      return value.filter(function(country) {
        return country.title.toLowerCase().includes(term.toLowerCase());
        // (item)=> item.title.startsWith(term));
      });
    }
  }
}
