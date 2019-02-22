import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID bc17ef966fa2dc83f6322e64c6baea85f379445450bc900e814b44da572c46fc'
    }
});
