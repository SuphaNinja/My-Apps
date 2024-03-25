import axios from 'axios';

const api = {
    getCurrentUser: async () => {
        const   { data }  = await axios.get('/api/get-current-user');
        return data;
    }
};

export default api;

