import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk('fetchTodos', async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
})

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isErr:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state,action)=>{
            state.isLoading=true;

        })
        builder.addCase(fetchTodos.fulfilled, (state,action)=>{
            state.isLoading = false ;
            state.data = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state,action)=>{
            console.log("Error", action.payload);
            state.isErr = true;
        })
    }
})


export default todoSlice.reducer