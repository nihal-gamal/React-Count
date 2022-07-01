import { configureStore } from '@reduxjs/toolkit';
import  todoSlice from './features/todoSlice';
import  shopSlice from './features/shopSlice';



//STORE
export  const store= configureStore({
    reducer: {
        todoSlice ,
        shopSlice
    }
});


