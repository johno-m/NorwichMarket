import axios from 'axios'
export default axios.create({
baseURL: 'https://norwich-market.firebaseio.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});