import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name : 'jeon', age : 23 }, 
    reducers : {
      changeName(state){
        state.name = 'jeon seong ik'
      }, plusAge(state, i){
        state.age += i.payload
      }
    }
})

export let { changeName, plusAge } = user.actions

export default user