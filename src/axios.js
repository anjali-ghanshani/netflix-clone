import axios from 'axios' /* using this to request movie data from TMDB via API key f81980ff410e46f422d64ddf3a56dddd*/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3" /* copied from the youtube video*/
})


export default instance;

