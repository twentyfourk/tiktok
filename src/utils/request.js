import axios from 'axios';

const tiktokRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, options = {}) => {
    const response = await tiktokRequest.get(api, options);
    return response.data;
};

export default tiktokRequest;
