import * as fromIngresoEgreso from './ingreso-egreso.actions'
import { IngresoEgreso } from '../models/ingreso-egreso.model';

export interface IngresoEgresoState{
  items:IngresoEgreso[]|null
}
const estadoInicial: IngresoEgresoState={
  items: null
}
export function IngresoEgresoReducer(state = estadoInicial, action: fromIngresoEgreso.acciones): IngresoEgresoState {
  switch (action.type) {
    case fromIngresoEgreso.SET_ITEMS:
      return {
        items: [...action.items] //rompe la relacion entre el arreglo y la referencia de esa variable
      }
    case fromIngresoEgreso.UNSET_ITEMS:
      return {
        items: []
      };
    default:
      return state
  }
}
