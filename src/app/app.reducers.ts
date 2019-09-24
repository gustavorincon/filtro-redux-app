import { Todo } from './todo/model/todo.model';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';


import * as  fromTodo  from './todo/todo.reducer';
import * as  fromFiltro  from './filter/filter.reducer';

import * as fromFiltrosActions from './filter/filter.actions';


export interface AppState{
    todos: Todo[];
    filtro :fromFiltrosActions.filtrosValidos;
}


export const  appReducers: ActionReducerMap<AppState>={

    todos: fromTodo.todoReducer,
    filtro : fromFiltro.filtroReducer

}