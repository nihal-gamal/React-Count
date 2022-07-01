import {createSlice} from "@reduxjs/toolkit";

//INTIAL STATE
const initialState ={
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
};
const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers :{
        addTodoSlice:(state ,action)=>{
            // console.log(state);
            state.todos.push(action.payload)
        },
        deleteTodoSlice:(state,action)=>{
            state.todos = state.todos.filter((item,index)=> index!== action.payload)
        },
        
    }
    
})
export const {addTodoSlice,deleteTodoSlice} =todoSlice.actions
export default todoSlice.reducer;