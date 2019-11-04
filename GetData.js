
const app = document.getElementById('root')
app.textContent = 'Fetching Data..';
const fetchOptions = { 
    method: 'GET',
    mode: 'no-cors',
    headers : {
        'Content-Type' : 'application/json',
        "Accept": 'application/json',
        //'From-Origin' : 'Localhost',
        'Access-Control-Allow-Origin': '*',
        credentials: 'same-origin'
    },
    "Accept": 'application/json',
    'Content-Type' : 'application/json'
    //data: {
    //    id : 6647635 
    //}
}
async function fetchData() {
    const response = await fetch('https://crossorigin.me/https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    console.log(response)
    const myJson = await response.json()
    console.log(JSON.stringify(myJson));
    const app = document.getElementById('root')
    app.textContent = JSON.stringify(myJson);
}
fetchData();
