import axios from 'axios';
const API = 'https://api.github.com/search/repositories';

export async function  getRepositoryFromAPI(date,page)
{
    return await axios.get(API + "?q=created:>" +date + "&sort=stars&order=desc&page="+page);
}