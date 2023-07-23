import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const AuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
     try {
    const response = await axios.post('/users/signup', credentials);
    AuthHeader(response.data.token);
    toast.success('You`re successfully Registered🔥')
    return response.data;
     }catch (error) {
     toast.warning('Something went wrong😥 Make sure that your password or email is in correct form and try again!');
     return thunkAPI.rejectWithValue(error.message);
     }
  }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
       try {
        const response = await axios.post('/users/login', credentials);
        AuthHeader(response.data.token);
        toast.success('You`re logged in, welcome back!')
        return response.data;
       } catch (error) {
        toast.warning('Invalid email or password, try again!');
        return thunkAPI.rejectWithValue(error.message);
       }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
        toast.success('You`re successfully Logged Out. See you again👋')
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user 😥');
        }

        try {
         AuthHeader(persistedToken);
         const response = await axios.get('/users/current');
         return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);