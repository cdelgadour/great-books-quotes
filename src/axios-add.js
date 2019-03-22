import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://great-books-5f716.firebaseio.com/'
});

export default instance;
