import axios from "axios";

const conferenceApi = {
    getAll: () => axios.get(`http://localhost:8080/conference`),
    getOne: (id) => axios.get(`http://localhost:8080/conference/${id}`),
}