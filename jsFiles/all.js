async function getData(){
    const res = await fetch('/api');
    const data = await res.json();
    console.log(data);
    
    document.querySelector('#dataDisplay').innerHTML = data.map(value=> {
            const {_id, longitude, latitude, input, status, timestamp} = value;
            return `
                <div key=${_id}>
                <hr />
                <p>Status: ${status}</p>
                <p>Lat: ${latitude}</p>
                <p>Lon: ${longitude}</p>
                <p>Time: ${new Date(timestamp).toLocaleString()}</p>
                <p>Input: ${input}</p>
                </div>
            `
    }).join('')
}

getData();




