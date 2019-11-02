const fetchOptions = { 
    method: 'GET',
    //credentials: '',
    mode: 'cors',
    headers : {
        'Content-Type' : 'application/json',
        'From-Origin' : 'Localhost'
    },
    'Origin' : 'Localhost'
    //'Content-Type' : 'application/json',
    //data: {
    //    id : 6647635 
    //}
}
async function fetchData() {
    //const response = await fetch('https://api.cuescore.com/tournament/', fetchOptions);
    const response = await fetch('https://cuescore.com/tournament/Seavus+Pool+League+2019%252F20/6647635', fetchOptions);
    console.log(response)
    const myJson = await response.json()
    console.log(JSON.stringify(myJson));
}
fetchData();

const app = document.getElementById('root')
app.textContent = JSON.stringify(myJson);
