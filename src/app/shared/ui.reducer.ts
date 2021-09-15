import * as FromUI from './ui.accions'

export interface State{
    isLoading:boolean;
}

const InitState:State={
    isLoading:false
}

export function uiReducer(state=InitState,accion:FromUI.acciones):State
{
    const accion1=accion as FromUI.acciones
    switch (accion.type){
    case FromUI.ACTIVAR_LOADING:
         return {
             isLoading:true
         }   
    case  FromUI.DESACTIVAR_LOADING:
        return {
            isLoading:false
        }   
        default:
        return state
    }
}