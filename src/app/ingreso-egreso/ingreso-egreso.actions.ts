import { Action } from "@ngrx/store";
import { IngresoEgreso } from '../models/ingreso-egreso.model';

export const SET_ITEMS = '[Ingreso Egreso] Set Items'
export const UNSET_ITEMS = '[Ingreso Egreso] Unset Items'
export class SetIngresoEgreso implements Action{
  readonly type = SET_ITEMS
  constructor(public items: IngresoEgreso[]) {
  }
}
export class UnsetIngresoEgreso implements Action {
  readonly type=UNSET_ITEMS
}
export type acciones = SetIngresoEgreso|UnsetIngresoEgreso
