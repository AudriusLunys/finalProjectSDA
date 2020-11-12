import axios from 'axios';
const TECHNICIAN_API_BASE_URL ="http://localhost:8080/api/technician";

class TechnicianService {
    
    getTechnicians(){
        return axios.get(TECHNICIAN_API_BASE_URL);
    }

    createTechnician(technician){
        return axios.post(TECHNICIAN_API_BASE_URL, technician);
    }

    getTechnicianById(technicianId){
        return axios.get(TECHNICIAN_API_BASE_URL + '/' + technicianId);
    }

    updateTechnician(technician, technicianId){
        return axios.put(TECHNICIAN_API_BASE_URL + '/' + technicianId, technician);
    }

    deleteTechnician(technicianId){
        return axios.delete(TECHNICIAN_API_BASE_URL + '/' + technicianId);
    }
}

export default new TechnicianService()