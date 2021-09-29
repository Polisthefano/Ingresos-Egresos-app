import * as fromIngresoEgreso from './ingreso-egreso.actions'
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AppState } from '../app.reducer';

export interface IngresoEgresoState{
  items:IngresoEgreso[]|null
}
export interface AppStateIngre extends AppState{ //extendes el appState y lo tenes que usar cuando trabajas con el reducer que usaste lazy loading
Items:IngresoEgresoState
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
