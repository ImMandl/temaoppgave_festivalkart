// Opens and closes the overlay
const toggleOverlay = () => {
    // Reference to HTML
    const overlay = document.querySelector("#overlay");
    const btn = document.querySelector(".overlay-btn");


    // Function
    if (overlay.style.display == "none") {
        overlay.style.display = "block" // makes the overlay visible
        btn.innerHTML = "Tilbake til kart" // changes text for the btn
    } else {
        overlay.style.display = "none" // removes the overlay
        btn.innerHTML = "Se Statistikk" // changes text for the btn
    }
}