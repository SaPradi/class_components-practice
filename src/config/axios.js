
import axios from 'axios';
const api_key = 'live_Ymscm4puzJrqNY8x6zA7VhXalR6HRyeaBeCyEVZo1F8E4FpUmDBx2sRX3apHIYsX';

const api = axios.create({
    baseURL:'https://api.thecatapi.com/v1/',
    headers:{
        'x-api-key': api_key
    }
});

export default api;