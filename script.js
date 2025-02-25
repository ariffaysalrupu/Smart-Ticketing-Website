
function scrollToSelection(){
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("scrollButton").addEventListener("click", scrollToSelection);
  

const allSeatsTogether = document.getElementsByClassName("all-seats");

for (const allSeats of allSeatsTogether){
    allSeats.addEventListener("click", function (event) {
        const ticketPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[11].childNodes[3].childNodes[1].innerText;
        const seatNumber = event.target.parentNode.childNodes[1].innerText;

        const seatSelectedContainer = document.getElementById("selected-seats");

        const div = document.createElement("div");
        div.classList.add("flex", "gap-4", "justify-between", "items-center", "px-4", "py-1");

        const seatNmbr = document.createElement("p");
        const seatPrice = document.createElement("p");
        const seatClassOutput = document.createElement("p")
        
        seatNmbr.innerText = seatNumber;
        seatNmbr.classList.add("font-semibold");

        seatPrice.innerText = ticketPrice;

        seatClassOutput.innerText = "Economy";
        
        

        div.appendChild(seatNmbr);
        div.appendChild(seatClassOutput);
        div.appendChild(seatPrice);

        seatSelectedContainer.appendChild(div);


        // console.log(event.target.);
    })
}





function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

const result = getConvertedValue("ticket-price");
