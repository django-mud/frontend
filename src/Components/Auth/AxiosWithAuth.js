import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://mudgame-cs26.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
        }
    });
};

export default axiosWithAuth;