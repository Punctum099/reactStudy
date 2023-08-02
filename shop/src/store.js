import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] ,
      reducers : {
        plusCount(state, action){
          let i = 0
          i = state.findIndex((a)=>a.id === action.payload)
          state[i].count++
        }, 
        minusCount(state, action){
          let i = 0
          i = state.findIndex((a)=>a.id === action.payload)
          state[i].count > 1 ? state[i].count-- : state.splice(i, 1)
        }, addCart(state, prod){
          let i = -1
          i = state.findIndex((a)=>a.id === prod.payload.id)
          if(i < 0){
            state.push({
              id: prod.payload.id,
              name: prod.payload.title,
              count: 1,
            })
          }else{
            state[i].count++
          }
        }, deleteCart(state, action){
          let i = 0
          i = state.findIndex((a)=>a.id === action.payload)
          state.splice(i, 1)
        }
      }
})

export let { plusCount, minusCount, addCart, deleteCart } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})  