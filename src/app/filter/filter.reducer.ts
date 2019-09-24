import * as fromFilter from './filter.actions';


const estadoInicial: fromFilter.filtrosValidos='todos';

export function filtroReducer (state = estadoInicial, action: fromFilter.Acciones): fromFilter.filtrosValidos{
    switch(action.type){

        case fromFilter.SET_FILTRO :
             return action.filtro;

        default: 
          return state;
    }

}