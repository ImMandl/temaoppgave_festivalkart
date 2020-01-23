// Opens and closes the sidebar
const toggleNav = () => {
    const element = document.querySelector("#mySidebar");
    if (element.style.width == "32rem") {
        element.style.width = "0px";
    } else {
        element.style.width = "32rem";
    }
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