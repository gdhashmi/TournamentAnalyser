import {getTournamentDetails } from './analyzeData.js';
var Data;

const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }

 async function fetchData(Data) {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    Data = await response.json();
    //console.log('Received response..');
    //console.log(JSON.stringify(Data));
    return 1;
}

fetchData(Data).then(getTournamentDetails(Data));