import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formValidationsErrors',
})
export class FormValidationsErrorsPipe implements PipeTransform {
  transform(
    value: ValidationErrors | undefined | null,
    ...args: unknown[]
  ): unknown {
    if (value) {
      let messages: string[] = [];
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          
          const element = value[key];
          console.log(element);
          
          if (key === 'required') messages.push('Este campo es requerido.');
          if (key === 'pattern')
            messages.push('No cumple con el formato requerido.');
        }
      }
      return messages.join('. ');
    }
    return null;
  }
}
