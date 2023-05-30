import { createSlice } from '@reduxjs/toolkit'

const initialState={
    contactData:{},
    token:false,
    
}   

export const ContactSlice=createSlice({
    name:'contact',
    initialState,
     
    reducers:{
        addContact:(state, action)=>{
          state.contactData=action.payload;
        },

        setEdit:(state)=>{
            state.contactData="";
          },

        setToken:(state, action)=>{
          state.token= true;
        },

      
    }

});


export const {addContact, setToken, setEdit} = ContactSlice.actions;

export default ContactSlice.reducer;