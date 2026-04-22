import axios from 'axios';

export default axios.create({
    baseURL: 'http://3.89.37.238:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
