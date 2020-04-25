import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-project-b3079.firebaseio.com/'
});

export default instance;