import {createSlice} from "@reduxjs/toolkit";

//INTIAL STATE
const initialState ={
    todos:[
            {
                title: "html",
                content: " ",
            },
            {
                title: "css",
                content: " ",
            },
            {
                title: "js",
                content: "",
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