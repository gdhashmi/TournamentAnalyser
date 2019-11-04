import {getTournamentDetails } from './analyzeData.js';
var lData;

const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
 async function fetchData() {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    lData = await response.json();
    console.log('Received response..');
    console.log(JSON.stringify(lData));
    return 1;
}
console.log('Getting Keys');
//console.log(Object.keys(lData));
//fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions).then((res) => {console.log('Waiting for response'); res.json()}).then((data) => {console.log('Processing response' + JSON.stringify(data)); getTournamentDetails(data)});
fetchData().then(sleep(5000).then(
    getTournamentDetails(lData)));