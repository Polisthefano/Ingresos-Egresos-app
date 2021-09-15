import { ActionReducerMap, Action } from '@ngrx/store';
import * as fromUI from './shared/ui.reducer';
import { acciones } from './shared/ui.accions';

export interface AppState{
    ui:fromUI.State
}
export const appReducers:ActionReducerMap<AppState,any>={//permite combinar los reducers
    ui:fromUI.uiReducer
} 