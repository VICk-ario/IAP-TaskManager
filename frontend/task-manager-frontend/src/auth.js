import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api'; // Replace with your backend URL

export const loginUser = async (credentials) => {
    return await axios.post(`${BASE_URL}/login/`, credentials);
};

export const signupUser = async (data) => {
    return await axios.post(`${BASE_URL}/signup/`, data);
};
