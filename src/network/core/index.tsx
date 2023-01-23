import axios from "axios";

export const northwindApiInstance = axios.create({
    baseURL: 'https://northwind.vercel.app/api/',
    timeout:1000
})