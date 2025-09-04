import axios from "axios";
axios.create({
    baseURL:import.meta.env.BASE_URL,
    timeout : 10000,
    headers:{
        'Content-Type':'application/json'
    }
})
