//create map
const map = L.map('mapid').setView([-7.226376,-35.8814862], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);
const icon= L.icon({
    iconUrl:'/images/marcacao1.svg',
    iconSize: [90,90],
    iconAnchor:[29,68],
    popupAnchor: [150, -75]
});


function addMarker({id, name,lat, lng}) {

//create popup overlay
    const popup= L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent( `${name} <a href="/center?id=${id}" > <img src="/images/Arrow 1.svg" > </a>`)

    L.marker([lat,lng], {icon}).addTo(map)
    .bindPopup(popup);

}

const centersSpan = document.querySelectorAll('.centers span');
centersSpan.forEach(span => {
    const center = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng

    }
    addMarker(center);
} )