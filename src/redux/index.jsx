import { createStore } from 'redux';

//ACTION
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const addActionTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteActionTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}
//INTIAL STATE
const intialState ={
    todos:[
            {
                title: "learn node js",
                content: "Lorem ipsum dolor sit amet.",
            },
            {
                title: "go to the sea",
                content: "Lorem ipsum dolor sit amet.",
            },
            {
                title: "walk the dog",
                content: "Lorem ipsum dolor sit amet.",
            },
            ],
}
//REDUCER
export const todoReducer =(state = intialState,action) =>{
    if(action.type === ADD_TODO){
        return {...state, todos:[...state.todos,action.payload]}
    }
    if(action.type === DELETE_TODO){
        return {...state, todos:[...state.todos.filter((item,index) => index !== action.payload)]}
    }
    return state;
}
//STORE
export  const store= createStore(todoReducer);


