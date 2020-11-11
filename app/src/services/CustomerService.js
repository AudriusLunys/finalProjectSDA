import axios from 'axios';

class CustomerService {

    getCustomers (){
        return axios.get("http://localhost:8080/api/customers");
    }

    createCustomer(customer){
       return axios.post ("http://localhost:8080/api/customer",customer );
    }
}

export default new CustomerService()