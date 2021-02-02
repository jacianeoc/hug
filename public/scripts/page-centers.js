//create map
const map = L.map('mapid').setView([-7.226376,-35.8814862], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

const icon= L.icon({
    iconUrl:'./public/images/marcacao1.svg',
    iconSize: [68,68],
    iconAnchor:[29,68],
    popupAnchor: [150, -75]
});

//create popup overlay
const popup= L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar dos gatinhos <a href="center.html?1" class= "choose-center"> <img src="./public/images/Arrow 1.svg" > </a>')
L.marker([-7.226376,-35.8814862], {icon}).addTo(map)
    .bindPopup(popup);
