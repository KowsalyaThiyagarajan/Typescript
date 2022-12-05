import { Action } from '../Action/Action'


export interface NoteState {
    notes:string[]
}
const intialState ={
    notes:[]
}


export const notesReducer = (state:NoteState =intialState,action:Action) =>{
switch(action.type){
    case "ADD_NOTE":{
        return{...state, notes:[...state.notes, action.payload]}
    }
    default:
        return state
}
}