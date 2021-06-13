var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var myIcon = L.icon({
  iconUrl: 'https://github.com/CodingTrain/Intro-to-Data-APIs-JS/blob/source/module1/03_fetch_json_exercise_scale_iss/iss200.png?raw=true',
  iconSize: [50, 32],
  iconAnchor: [25, 16]
});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);



async function getData(){
  const res = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  const data = await res.json();
  
  const {latitude, longitude} = data;

  // console.log(latitude, longitude)

  marker.setLatLng([latitude, longitude]);
  mymap.setView([latitude,longitude], 2);

}

setInterval(getData, 2000);