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

export const fetchAries = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=aries`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchTaurus = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=taurus`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchGemini = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=gemini`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchCancer = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=cancer`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchLeo = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=leo`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchVirgo = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=virgo`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchLibra = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=libra`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchScorpio = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=scorpio`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchSagittarius = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=sagittarius`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchCapricorn = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=capricorn`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchAquarius = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=aquarius`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchPisces = async () => {
    const { data } = await axios.get(`${BASE_URL}/sign?s=pisces`, options);
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
