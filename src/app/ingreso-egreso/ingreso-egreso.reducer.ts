import * as fromIngresoEgreso from './ingreso-egreso.actions'
import { IngresoEgreso } from '../models/ingreso-egreso.model';

export interface IngresoEgresoState{
  items:IngresoEgreso[]
}
const estadoInicial: IngresoEgresoState={
  items:[]
}
export function IngresoEgresoReducer(state = estadoInicial, action: fromIngresoEgreso.acciones): IngresoEgresoState {
  switch (action.type) {
    case fromIngresoEgreso.SET_ITEMS:
      return {
        items: [...action.items]
      }
    default:
      return state
  }
}
