import axios from 'axios';

const BASE_URL = "http://68.178.162.203:8080/application-test-v1.1"

const API = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetch_books = () => API.get(`${BASE_URL}/books`);