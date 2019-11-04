export function getTournamentDetails(data) {
	var lContacts = data.contacts;
	delete data.contacts;
	const lContainer = document.getElementById('container');
	var lElement = document.createElement('h1');
	lElement.innerText = data.name;
	lContainer.appendChild(lElement);
	getOrganiserDetails(lContacts);
	var lPlayerDetails = getPlayerDetails(data, lContainer);
	console.log(data);
}

function getPlayerDetails(data, Container) {
	var lStanding = data.standings;
	delete data.standings;
	var lElement = document.createElement('p');
	lElement.innerText = 'Tournament has ' + lStanding['1'].length + ' Players';
	Container.appendChild(lElement);
	getStandings(lStanding);
	var lMatches = data.matches;
	lElement = document.createElement('p');
	lElement.innerText = 'Tournament has ' + lMatches.length + ' Matches';
	Container.appendChild(lElement);
	delete data.matches;
	getMatches(lMatches);
}

function getStandings(standings) {
	
	var lStanding = Object.keys(standings);
	console.log(standings);
	return lStanding;
}

function getMatches(matches, Player) {
	var lMatches = Object.keys(matches);
	console.log(matches);
	return lMatches;
}

function getOrganiserDetails(contacts) {
	var lContacts = Object.keys(contacts);
	console.log(contacts);
	return lContacts;
}