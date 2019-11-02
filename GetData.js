const fetchOptions = { 
    headers: {
        'Origin' : 'https://gdhashmi.github.io/'
    }
}
async function fetchData() {
    const response = await fetch('https://api.cuescore.com/tournament/?id=6647635', fetchOptions);
    console.log(response)
    const myJson = await response.json()
    console.log(JSON.stringify(myJson));
}
fetchData();

const app = document.getElementById('root')
app.textContent = JSON.stringify(myJson);
