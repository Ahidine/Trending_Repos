import axios from 'axios';
const API = 'https://api.github.com/search/repositories';
// this function used to communcate with api 
export async function  getRepositoryFromAPI(date,page)
{
    return await axios.get(API + "?q=created:>" +date + "&sort=stars&order=desc&page="+page);
}