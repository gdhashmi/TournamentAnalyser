import {getTournamentDetails } from './analyzeData.js';

const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }

//var lData =  async () => {
//    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
//   await response.json();
//   console.log('Received response..');
//    return 1;
//}
console.log('Getting Keys');
//console.log(Object.keys(lData));
fetch('https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635', fetchOptions).then((res) => {console.log('Waiting for response'); await res.json()}).then((data) => {console.log('Processing response' + JSON.stringify(data)); getTournamentDetails(data)});
//fetchData().then(sleep(5000).then(
// getTournamentDetails(lData);
//));