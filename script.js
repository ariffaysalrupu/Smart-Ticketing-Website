
function scrollToSelection(){
    document.getElementById("targetSection").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("scrollButton").addEventListener("click", function);
  

const allSeatsTogether = document.getElementsByClassName("all-seats");

for (const allSeats of allSeatsTogether){
    allSeats.addEventListener("click", function (event) {
        const ticketPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[11].childNodes[3].childNodes[1].innerText;
        const seatNumber = event.target.parentNode.childNodes[1].innerText;

        // console.log(event.target.);
    })
}



function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

const result = getConvertedValue("ticket-price");
