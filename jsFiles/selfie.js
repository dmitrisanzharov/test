function selfie(){

    if('geolocation' in navigator){
        

        navigator.geolocation.getCurrentPosition(async position => {

            // console.log(position)

            const {latitude, longitude} = position.coords; 

            document.querySelector('#lat').innerHTML = latitude.toFixed(2);
            document.querySelector('#lon').innerHTML = longitude.toFixed(2);

            const res = await fetch('/selfie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({latitude, longitude, input: document.querySelector('input').value})
            });
            const data = await res.json();
            console.log(data);
            document.querySelector('input').value = '';
        })


        

    } else {
        console.log('not available')
    }

            

    

// end of selfie app
}

document.querySelector('button').addEventListener('click', selfie)


