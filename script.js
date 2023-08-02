const map = L.map('map').setView([25.7116 ,85.6345 ], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([25.7116,85.6345 ]).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    // .openPopup(); 
    navigator.geolocation.watchPosition(function(pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        marker.setLatLng([lat,lng]).update();
        map.setView([lat,lng],10);

        marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
    });

// const map = L.map('map').setView([25.7116,85.6345 ], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([25.7116,85.6345]).addTo(map);
//     // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     // .openPopup();
//     navigator.geolocation.watchPosition(function(pos) {
//                 const lat = pos.coords.latitude;
//                 const lng = pos.coords.longitude;
        
//                 marker.setLatLng([lat,lng]).update();
//                 map.setView([lat,lng],10);
        
//                 marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
//             });