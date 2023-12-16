import axios from "axios";

export const BASE_URL = 'https://horoscope-astrology.p.rapidapi.com';

const options = {
// params: {maxResults: '50'},
headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
}
};
export const fetchFromAPI = async (url) => {
const { data } = await axios.get(`${BASE_URL}/sign?s=aries`, options);
// const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
console.log(data)
return data;
};

export const fetchAries = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=aries`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
    };


export const BASE_URL2 = 'https://youtube-v311.p.rapidapi.com';

const options2 = {
    params: {maxResults: '50'},
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
};
export const fetchFromAPI2 = async (url) => {
    const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    return data;
};
