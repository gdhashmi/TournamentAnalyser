import {getTournamentDetails } from './analyzeData.js';
const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }
async function fetchData(Data) {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    console.log(response)
    Data = await response.json();
    console.log('Received response..');
    console.log(JSON.stringify(Data));
    return myJson;
}
var lData;
fetchData(lData).then 
getTournamentDetails(lData);