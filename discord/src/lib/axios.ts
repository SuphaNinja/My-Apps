import axios from 'axios';

export const api = {
    getCurrentUser: async () => {
        const { data } = await axios.get('/api/get-current-user');
        return data;
    }
};

