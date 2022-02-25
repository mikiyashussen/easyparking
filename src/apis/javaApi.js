import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-3-19-143-159.us-east-2.compute.amazonaws.com:8080'
});