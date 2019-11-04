import {getTournamentDetails } from './analyzeData.js';
var lData;

const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }

 async function fetchData() {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    lData = await response.json();
    //console.log('Received response..');
    //console.log(JSON.stringify(Data));
    return 1;
}
//fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions).then((res) => {console.log('Waiting for response'); res.json()}).then((data) => {console.log('Processing response' + JSON.stringify(data)); getTournamentDetails(data)});
fetchData().then(getTournamentDetails(lData));