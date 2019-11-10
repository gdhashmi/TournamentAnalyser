import {getTournamentDetails } from './analyzeData.js';

const fetchOptions = { 
    method: 'GET',
    origin:'https://gdhashmi.github.io/', 
 }

const URL = 'https://cors-anywhere.herokuapp.com/https://api.cuescore.com/tournament/?id=6647635';
//Get the data and display.
fetch(URL, fetchOptions)
.then((res) => { return res.json() })
    .then((data) => { return getTournamentDetails(data) })
.catch((err) => { console.log(err);});
