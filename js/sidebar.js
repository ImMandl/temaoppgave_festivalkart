// Opens and closes the sidebar
const toggleNav = () => {
    // Reference to HTML
    const mySidebar = document.querySelector("#mySidebar");
    const openbtn = document.querySelector(".openbtn");


    // Function
    if (mySidebar.style.width == "32rem") {
        mySidebar.style.width = "0px"; // sets sidebar to 0px
        openbtn.innerHTML = "&#9776;" // sets icon to open sidebar
    } else {
        mySidebar.style.width = "32rem"; // sets sidebar to 320px
        openbtn.innerHTML = "&#9932;" // sets icon to close sidebar
    }
}

// On click function that takes you to the location of the article you clicked
// Reference to HTML
const nav = document.querySelector("#nav");

// Sends you to the location of the article you clicked on
nav.onclick = (evt) => {

    const lng = Number(evt.target.dataset.lng);
    const lat = Number(evt.target.dataset.lat);

    // Collects lng and lat to one
    const point = [lng, lat];

    // Takes you to the article that was clicked
    map.flyTo({
        center: point,
        zoom: 16,
        speed: 0.6
    });

}