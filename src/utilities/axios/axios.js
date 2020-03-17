import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://assaf-project.firebaseio.com/'
})

export default instance;
