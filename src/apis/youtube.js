import axios from 'axios';

const KEY = 'YOUR_API_KEY';

const client = axios.create({ baseURL: 'https://www.googleapis.com/youtube/v3' });

client.interceptors.request.use(config => {
    config.params = {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        q: config.params.q,
    };
    return config;
});
export default client;