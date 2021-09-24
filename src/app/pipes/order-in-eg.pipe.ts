import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Pipe({
  name: 'orderInEg'
})
export class OrderInEgPipe implements PipeTransform {

  transform(items: IngresoEgreso[]): IngresoEgreso[] {
   return [...items].sort((a, b) => {
     console.log(a.tipo,b.tipo)
      if (a.tipo == 'ingreso') {
        return -1
      }
      else{
        return 1
      }

    })
  }

}
