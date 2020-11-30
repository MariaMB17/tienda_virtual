import axios from 'axios';

const baseURL = 'http://api.test/api/v1/';
//const token = localStorage.getItem('token')

export default axios.create({
    baseURL,
     headers: {
         'Content-Type': 'application/json',
     //     ' Accept': 'application/json',
    //     //'Authorization': `Bearer ${token}`
     }
}); 