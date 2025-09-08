import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
    },
    reducers: {
        addItem : (state,action) => {
           // mutating the state here directly is allowed in redux toolkit
           state.items.push(action.payload)
        },
        removeItem : (state,action) => {
           state.items.pop();
        },
        clearCart : (state,action) => {
           state.items.length = 0; 
        }
    }

        

})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;