import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const registerUser = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const { data } = await axios.post("/users/signup", formData);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logInUser = createAsyncThunk(
    'auth/login',
    async (formData, thunkAPI) => {
        try {
            const {data} = await axios.post("/users/login", formData);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const logOutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });


export const refreshUser = createAsyncThunk( 
    'auth/refresh',
    async (_, thunkAPI) => {
        
        const state = thunkAPI.getState();
        const token = state.auth.token;
    
        if (token === null) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
            setAuthHeader(token); 
            const res = await axios.get("/users/current");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)



