// Reference to HTML-elements
const nav = document.querySelector("#nav");

// Set the width of the sidebar to 250px and the left margin of the page content to 250px 
const openNav = () => {
    document.querySelector("#mySidebar").style.width = "32rem";
    document.querySelector("#main").style.marginLeft = "32rem";
}

// Set the width of the sidebar to 0 and the left margin of the page content to 0 
const closeNav = () => {
    document.querySelector("#mySidebar").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
}

// Sends you to the location of the article you clicked on
nav.onclick = (evt) => {

    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);

    const point = [lng, lat];

    map.flyTo({
        center: point,
        zoom: 16,
        speed: 0.6
    });

}