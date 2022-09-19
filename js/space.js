let inputBuscar = document.getElementById('inputBuscar');
const btnBuscar = document.getElementById('btnBuscar');
// "https://images-api.nasa.gov/search?q="


let DATOS_NASA = [];

function valorInput(){
    let inputBuscar = document.getElementById('inputBuscar').value;

    return `https://images-api.nasa.gov/search?q=${inputBuscar}`
}


function GetJSONData() {
    let url = valorInput()

    fetch(url)
        .then(res => res.json())
        .then(data =>{
            DATOS_NASA = data.collection.items
            Display_cards(DATOS_NASA);})
}

btnBuscar.addEventListener('click',GetJSONData)



function Display_cards(card_data) {
    let HtmlContent = "";

    // console.log(card_data);

    for (let i = 0; i < card_data.length; i++) {
        if (card_data[i].links === undefined)
            continue;

        HtmlContent += `
        <div class="card-group col-md-4">
            <div class="card">
                <img src="${card_data[i].links[0].href}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${card_data[i].data[0].title}</h5>
                <p class="card-text">${card_data[i].data[0].description}</p>
             </div>
            <div class="card-footer">
                <small class="text-muted">${card_data[i].data[0].date_created}</small>
            </div>
            </div>
        </div>
    `
    }



    document.getElementById('contenedor').innerHTML = HtmlContent
}