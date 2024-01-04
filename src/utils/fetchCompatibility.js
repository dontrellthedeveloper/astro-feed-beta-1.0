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

export const fetchCompSign = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchTaurusCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchGeminiCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchCancerCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchLeoCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchVirgoCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchLibraCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchScorpioCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchSagittariusCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchCapricornCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchAquariusCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

export const fetchPiscesCompatability = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    // const { data } = await axios.get(`${BASE_URL2}/${url}`, options2);
    console.log(data)
    return data;
};

