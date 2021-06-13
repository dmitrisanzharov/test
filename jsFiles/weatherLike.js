async function getData(){
    const res = await fetch('/weather-like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({location: document.querySelector('select').value})
    });
    const data = await res.json();
    console.log(data);

    const temp = data.current.temp_c;
    const weather = data.current.condition.text;

    document.querySelector('#display').innerHTML = `
        Temp: ${temp}, weather: ${weather}
    `


    document.querySelector('select').selectedIndex = 0;
}

document.querySelector('button').addEventListener('click', getData);