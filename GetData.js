
const app = document.getElementById('root')
app.textContent = 'Fetching Data..';
const fetchOptions = { 
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}
async function fetchData() {
    const response = await fetch('https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    console.log(response)
    const myJson = await response.json()
    console.log(JSON.stringify(myJson));
}
fetchData();

app.textContent = JSON.stringify(myJson);
