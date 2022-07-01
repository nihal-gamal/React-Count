
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

// const baseUrl= 'https://fakestoreapi.com/products';
export const getProducts = createAsyncThunk("shop/getProducts",()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>(json))
})

const initialState ={
    products:[],
    loading:false,
    error:{},
}

export const shopSlice = createSlice({
    name:'shop',
    initialState,
    extraReducers:{
        [getProducts.pending] :(state)=>{
            state.loading=true;
        },
        [getProducts.fulfilled] :(state ,action)=>{
            console.log("fulfilled");
            state.products = action.payload
            console.log(action);
            state.loading=false;
        },
        [getProducts.rejected] :(state ,action)=>{
            state.err=action.payload
            state.loading=false;
        }
    }

})

// export const {getProducts}=shopSlice.actions
export default shopSlice.reducer