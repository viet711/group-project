import axios from "axios";
const insntance = axios.create({
    baseURL: "http://localhost:8080/api"
})

export default insntance;