//create map
const map = L.map('mapid').setView([-7.226376,-35.8814862], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

//create icon
const icon= L.icon({
    iconUrl:'/images/marcacao1.svg',
    iconSize: [90,90],
    iconAnchor:[29,68],

});

let marker;
/*create and add marker*/
map.on('click', (event)=>{

    const lat = event.latlng.lat;
    const lng = event.latlng.lng; 

    //aqui ele pega o name que tem o valor lat e lng 
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //add icon layer
    //se marker tiver, ele vai tirar
    marker && map.removeLayer(marker);

    marker=L.marker([lat,lng], {icon}).addTo(map);

}); 


//add o campo de fotos com o add event
const el = document.querySelector("#addPhoto");

el.addEventListener("click", () =>{

    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da ultima imagem adicionada
    const newFieldcontainer = fieldsContainer[fieldsContainer.length - 1 ].cloneNode(true);

    //verificar se o campo está vazio, não add ao container de imagens
    const inputImg = newFieldcontainer.children[0];
    if(inputImg.value ===''){
        return;
    }

    //limpar o campo 
    newFieldcontainer.children[0].value= '';

    //adicionar o clone ao container de #images
    container.appendChild(newFieldcontainer);
});

/****deletando uma imagem******
let d = document.querySelector("#delete");

d.addEventListener("click", (event) =>{
    

});*/

function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = '';
        return

    }

    span.parentNode.remove();
    console.log('tirando');
}


/***** select yer or not*****/
function toggleSelect(event) { 
    
    //retirar a class active 
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    //pegar o butão clicado e colocar a class active
    const button = event.currentTarget
    button.classList.add('active');

    //atualizar o input com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]');

    //verificar se e sim ou nao
    input.value = button.dataset.value

}

function validate(event) {
    //aqui ele pega o name que tem o valor lat e lng 
    //validar se lat e lngestão validados
    const lat = document.querySelector('[name="lat"]').value;
    const lng = document.querySelector('[name="lng"]').value;

    console.log('aqui  é nos: ' + lat);
    console.log('aqui é a longitude ' + lng);
    if(lat=== '' && lng===''){
        alert('preencha os campos');
        event.preventDefault();
    }
    
    
}