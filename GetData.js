import {getTournamentDetails } from './analyzeData.js';
const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }
async function fetchData() {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    console.log(response)
    const myJson = await response.json();
    console.log('Received response..');
    console.log(JSON.stringify(myJson));
    return myJson;
}
var lData = fetchData();
getTournamentDetails(lData);