import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: localStorage.getItem("cartStore") ? JSON.parse(localStorage.getItem("cartStore")) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct !== -1){
        state.cartItem[findProduct].qun += 1
        localStorage.setItem("cartStore", JSON.stringify(state.cartItem))
      }else{
        state.cartItem = [ ...state.cartItem, action.payload ]
        localStorage.setItem("cartStore", JSON.stringify(state.cartItem))
      }
    },

    increment: (state, action)=>{
      state.cartItem[action.payload].qun += 1
      localStorage.setItem("cartStore", JSON.stringify(state.cartItem))
    },

    decrement: (state, action)=>{
      if(state.cartItem[action.payload].qun > 1){
        state.cartItem[action.payload].qun -= 1
        localStorage.setItem("cartStore", JSON.stringify(state.cartItem))
      }
    },

    productRemove: (state, action)=>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cartStore", JSON.stringify(state.cartItem))
    },

  },
})


export const { addToCart, increment, decrement, productRemove } = productSlice.actions

export default productSlice.reducer