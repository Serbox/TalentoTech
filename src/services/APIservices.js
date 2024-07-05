import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction(){
    const response = await axios.get(`${API_URL}/usuario`);
    return response.data;
}

export async function getNota(){
    const response = await axios.get(`${API_URL}/calificaciones`);
    return response.data;
}

export async function getActividad(){
    const response = await axios.get(`${API_URL}/Actividades`);
    return response.data;
}