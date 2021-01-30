//create a obj

const opitons = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//create map
const map = L.map('mapid', opitons).setView([-7.226376,-35.8814862], 15);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

const icon= L.icon({
    iconUrl:'./public/images/marcacao1.svg',
    iconSize: [68,68],
    iconAnchor:[29,68],
    popupAnchor: [150, -75]
});


L.marker([-7.226376,-35.8814862], {icon}).addTo(map)

/*image gallery */


function selectImage(event) {
    //pegando o botão seletionado
    const button = event.currentTarget

    //removendo a classe active de todos os boteos
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button)=> {
        button.classList.remove("active");
    });

    //selecionando a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".center-details > img");

    //atualizando a imagem grande 
    imageContainer.src = image.src;

    //colocando a imagem selecionada como ativa
    button.classList.add("active");
}