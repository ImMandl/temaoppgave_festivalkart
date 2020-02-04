// Reference to HTML-elements
const buttons = document.querySelector('#buttons')

// The map
mapboxgl.accessToken = 'pk.eyJ1IjoiaW1tYW5kZWwiLCJhIjoiY2s1M2x1amkzMDg3YTNqbnJuOGQ4ZjNtMSJ9._gMNaPwFio3wiDprexoZKg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/immandel/ck53shyjx05we1cpsmmdc2l0y',
    zoom: 15,
    minZoom: 12,
    center: [11.091831, 60.791730]
});

// Makes a button click change the style of the map based on the buttons dataset 
buttons.onclick = (evt) => {
    const stil = evt.target.dataset.stil
    map.setStyle("mapbox://styles/" + stil);
}

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// ---- PINS -----
// TG pin
const tgPin = (e) => {
    const tg = document.createElement("a");
    tg.className = "tg-marker";

    // lager en popup
    const tgPopup = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(`
        <b>Vikingskipet</b>
        `
    );

    const tgMarker = new mapboxgl.Marker(tg);
    tgMarker.setLngLat([11.100961, 60.793035]);
    tgMarker.setPopup(tgPopup)
    tgMarker.addTo(map);

}

// Parking pins 
const parkPin = () => {
    // pin 1 (vkingskipet)
    const park = document.createElement("a");
    park.className = "parking-marker";

    // lager en popup
    const popupParkering = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Hovedparkering</b>'
    );

    const parkMarker = new mapboxgl.Marker(park);
    parkMarker.setLngLat([11.097720, 60.790868]);
    parkMarker.setPopup(popupParkering)
    parkMarker.addTo(map);

    // pin 2 (vegvesenet)
    const park2 = document.createElement("a");
    park2.className = "parking-marker";

    // lager en popup
    const popupParkering2 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Parkering hos Hamar trafikkstasjon</b>'
    );

    const parkMarker2 = new mapboxgl.Marker(park2);
    parkMarker2.setLngLat([11.097533, 60.793599]);
    parkMarker2.setPopup(popupParkering2)
    parkMarker2.addTo(map);

    // pin 3 (parkering for campingvogner og hengere)
    const caravan = document.createElement("a");
    caravan.className = "caravan-marker";

    // lager en popup
    const popupCaravan = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Parkering for campingbiler og hengere</b>'
    );

    const caravanMarker = new mapboxgl.Marker(caravan);
    caravanMarker.setLngLat([11.095848, 60.789246]);
    caravanMarker.setPopup(popupCaravan)
    caravanMarker.addTo(map);
}

// Sleep pins 
const sleepPin = () => {
    // pin 1 (daniel)
    const sleep = document.createElement("a");
    sleep.className = "sleep-marker";

    // lager en popup
    const popupSleep = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Soveplass hos Daniel</b>'
    );

    const sleepMarker = new mapboxgl.Marker(sleep);
    sleepMarker.setLngLat([11.072281, 60.795172]);
    sleepMarker.setPopup(popupSleep)
    sleepMarker.addTo(map);

    // pin 2 (vikingskipet)
    const sleep2 = document.createElement("a");
    sleep2.className = "sleep-marker";

    // lager en popup
    const popupSleep2 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Sovetelt på tg</b>'
    );

    const sleepMarker2 = new mapboxgl.Marker(sleep2);
    sleepMarker2.setLngLat([11.099444, 60.792389]);
    sleepMarker2.setPopup(popupSleep2)
    sleepMarker2.addTo(map);
}

// 24timers butikk pin
const sundayStorePin = () => {
    const sundayStore = document.createElement("a");
    sundayStore.className = "sunday-store-marker";

    // lager en popup
    const popupSundayStore = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Joker Skolegata</b><br>Matbutikk som er åpen under hele påsken.<br>Skolegata 51, 2318 Hamar'
    );

    const sundayStoreMarker = new mapboxgl.Marker(sundayStore);
    sundayStoreMarker.setLngLat([11.072437, 60.799263]);
    sundayStoreMarker.setPopup(popupSundayStore);
    sundayStoreMarker.addTo(map);
}

// Pizza pins
const pizzaPin = () => {
    // pin 1 (pizzabakeren)
    const pizza = document.createElement("a");
    pizza.className = "pizza-marker";

    // lager en popup
    const popupPizza = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Pizzabakeren Stangevegen</b><br>Du kan gå hit på 13min eller ringe og få det levert til vikingskipet.<br>Stangevegen 72, 2321 Hamar'
    );

    const pizzaMarker = new mapboxgl.Marker(pizza);
    pizzaMarker.setLngLat([11.087881, 60.791406]);
    pizzaMarker.setPopup(popupPizza);
    pizzaMarker.addTo(map);

    // pin 2 (peppes pizza)
    const pizza2 = document.createElement("a");
    pizza2.className = "pizza-marker";

    // lager en popup
    const popupPizza2 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        '<b>Peppes Pizza</b><br>Du kan gå hit på 22min eller ringe og få det levert til vikingskipet.<br>Østre Torg, 2301 Hamar'
    );

    const pizzaMarker2 = new mapboxgl.Marker(pizza2);
    pizzaMarker2.setLngLat([11.074579, 60.793547]);
    pizzaMarker2.setPopup(popupPizza2);
    pizzaMarker2.addTo(map);
}

// Store pins
const storePin = () => {
    // pin 1 (kiwi cc mart'n)
    const store = document.createElement("a");
    store.className = "store-marker";

    // lager en popup
    const popupStore = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>KIWI CC Mart'n Hamar</b><br>Det tar ca 11min å gå hit.<br>Ringgata 53, 2318 Hamar"
    );

    const storeMarker = new mapboxgl.Marker(store);
    storeMarker.setLngLat([11.089260, 60.796022]);
    storeMarker.setPopup(popupStore);
    storeMarker.addTo(map);

    // pin 2 (vikasenteret)
    const store2 = document.createElement("a");
    store2.className = "store-marker";

    // lager en popup
    const popupStore2 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>Vikasenteret</b><br>Det tar ca 21min å gå hit.<br>Vikavegen 15, 2312 Bekkelaget"
    );


    const storeMarker2 = new mapboxgl.Marker(store2);
    storeMarker2.setLngLat([11.109145, 60.783800]);
    storeMarker2.setPopup(popupStore2);
    storeMarker2.addTo(map);

    // pin 3 (cc mat (store senteret))
    const store3 = document.createElement("a");
    store3.className = "store-marker";

    // lager en popup
    const popupStore3 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>CC Mat Hamar</b><br>Det tar ca 20min å gå hit.<br>Vangsvegen 62, 2317 Hamar"
    );

    const storeMarker3 = new mapboxgl.Marker(store3);
    storeMarker3.setLngLat([11.080408, 60.796886]);
    storeMarker3.setPopup(popupStore3);
    storeMarker3.addTo(map);
}

// Food pin
const foodPin = () => {
    // pin 1 (ved siden av peppes)
    const food = document.createElement("a");
    food.className = "food-marker";

    // lager en popup
    const popupFood = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>Torggata</b><br>Det tar ca 22min å gå hit. Her har du et stort utvalg av forskjellige spisesteder. Lunchbar, indisk, kebab, asiatisk, pizza og mer."
    );

    const foodMarker = new mapboxgl.Marker(food);
    foodMarker.setLngLat([11.073758, 60.793487]);
    foodMarker.setPopup(popupFood);
    foodMarker.addTo(map);

    // pin 2 (kantina på tg)
    const food2 = document.createElement("a");
    food2.className = "food-marker";

    // lager en popup
    const popupFood2 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>Kantina i vikingskipet</b><br>Her serveres pølser, pommes frites, burgere, baguetter og smørbrød i tillegg til forskjellig drikke<br>Det er også her du kan få brukt matbilletten din til frokokst, lunsj og middag."
    );

    const foodMarker2 = new mapboxgl.Marker(food2);
    foodMarker2.setLngLat([11.100847, 60.793529]);
    foodMarker2.setPopup(popupFood2);
    foodMarker2.addTo(map);

    // pin 3 (pizza på tg)
    const food3 = document.createElement("a");
    food3.className = "food-marker";

    // lager en popup
    const popupFood3 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>Kiosk ved inngangen i vikingskipet</b><br>Her kan du få fersk pizza, burgere eller kebab rett ved inngangen til vikingskipet"
    );

    const foodMarker3 = new mapboxgl.Marker(food3);
    foodMarker3.setLngLat([11.101406, 60.793560]);
    foodMarker3.setPopup(popupFood3);
    foodMarker3.addTo(map);

    // pin 4 (McDonalds)
    const food4 = document.createElement("a");
    food4.className = "food-marker";

    // lager en popup
    const popupFood4 = new mapboxgl.Popup({ closeButton: false, offset: 25 }).setHTML(
        "<b>McDonalds</b><br>Det tar ca 27min å gå hit.<br>Torggata 81/83, 2317 Hamar"
    );

    const foodMarker4 = new mapboxgl.Marker(food4);
    foodMarker4.setLngLat([11.068404, 60.795305]);
    foodMarker4.setPopup(popupFood4);
    foodMarker4.addTo(map);
}


// Adds a marker to the map 
map.on("load", () => {
    tgPin();
    parkPin();
    sleepPin();
    sundayStorePin();
    pizzaPin();
    storePin();
    foodPin();
});