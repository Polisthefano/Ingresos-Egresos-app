import { AuthState } from './auth/auth.reducer';
import { ActionReducerMap, Action } from '@ngrx/store';
import * as fromUI from './shared/ui.reducer';
import { acciones } from './shared/ui.accions';
import * as fromAuth from './auth/auth.reducer';

export interface AppState{
  ui: fromUI.State;
  Auth: fromAuth.AuthState
}
export const appReducers:ActionReducerMap<AppState,any>={  //permite combinar los reducers el action reducerMap
  ui: fromUI.uiReducer,
  Auth:fromAuth.authReducer
}
