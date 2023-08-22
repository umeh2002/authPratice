import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user:{}||null
}

const GlobalState = createSlice({
  name: "auth",
  initialState,
  reducers: {
createUser:((state,{payload})=>{
    state.user=payload
}),
logOut:(state)=>{
    state.user=null
}
  }
});

export const {createUser,logOut} = GlobalState.actions

export default GlobalState.reducer