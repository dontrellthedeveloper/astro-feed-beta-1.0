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
const { data } = await axios.get(`${BASE_URL}/sign?s=${url}`, options);
// const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
console.log(data)
return data;
};

export const fetchAriesCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};
