require('dotenv').config();

const apiKey = process.env.key;
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");