
import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

const baseUrl= 'https://fakestoreapi.com/products';
export const getProducts = createAsyncThunk("shop/getProducts",()=>{
    return fetch(baseUrl)
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
            state.products = action.payload
            state.loading=false;
        },
        [getProducts.rejected] :(state ,action)=>{
            state.err=action.payload
            state.loading=false;
        }
    }

})
export default shopSlice.reducer