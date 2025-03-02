
function scrollToSelection(){
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("scrollButton").addEventListener("click", scrollToSelection);
  

const allSeatsTogether = document.getElementsByClassName("all-seats");
const selectedSeats = new Set();
const seatCount = document.getElementById("seat-count");
let totalSeatsAvailable = 40;
const applybtn = document.getElementById("apply-btn");
applybtn.disabled=true;

seatCount.innerText = totalSeatsAvailable;

for (const allSeats of allSeatsTogether){
    allSeats.addEventListener("click", function (event) {
       
        if (selectedSeats.size >= 4) {
            alert("You can't select more than 4 seats!");
            return;
        }
        
        const seatButton = event.target;
        if(totalSeatsAvailable===0){
            alert("All seats are booked!");
            return;
        }

        const seatNumber = event.target.parentNode.childNodes[1].innerText;
        if (selectedSeats.has(seatNumber)) {
            alert("This seat is already selected!");
            return;
        }
        
        const ticketPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[11].childNodes[3].childNodes[1].innerText;
        
        

        const seatSelectedContainer = document.getElementById("selected-seats");

        const div = document.createElement("div");
        div.classList.add("flex", "gap-4", "justify-between", "items-center", "lg:px-4", "py-1");

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

        selectedSeats.add(seatNumber);

        allSeats.style.backgroundColor = "#1DD100";
        allSeats.style.color = "white"; 

        totalSeatsAvailable = totalSeatsAvailable - 1;
        seatCount.innerText = totalSeatsAvailable;

        totalCost(seatPrice.innerText);
        grandTotal();
      

        if(selectedSeats.size>=4){
            applybtn.disabled=false;
        }

        
    })
}

    function floatingCardSection(){
        const nextBtn = document.getElementById("next-button");
        const inputs = document.getElementsByClassName("user-input");
        const blurredBackground = document.getElementById("blurred-background");
        const floatingCard = document.getElementById("floating-card");
        const continueButton = document.getElementById("continue-button");

        nextBtn.addEventListener("click", () => {

            let inputFieldsFilled = true;
            for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === "") {
                inputFieldsFilled = false;
               break;
                }
            }

            if (inputFieldsFilled) {
                blurredBackground.classList.remove("hidden");
                floatingCard.classList.remove("hidden");
            } 
            else {
                alert("Please fill all the fields before proceeding!");
            }
        });

            
        continueButton.addEventListener("click", () => {
        blurredBackground.classList.add("hidden");
        floatingCard.classList.add("hidden");
        
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""; // Clear the input field
        }
        
        });

        
}

floatingCardSection();




function totalCost(value){
      
    const totalCostCalculate = getConvertedValue("total-cost");
    const sum = totalCostCalculate + parseInt(value);

    document.getElementById("total-cost").innerText = sum;
    
}

function grandTotal(status){
    
    const totalCostCalculate = getConvertedValue("total-cost");
    
    if(status==undefined){

        document.getElementById("grand-total").innerText = totalCostCalculate;
    }
    else{
        
        const couponCode = document.getElementById("coupon-code").value

        if(couponCode=="NEW15"){
            const discountedPrice = totalCostCalculate * 0.15;
            document.getElementById("grand-total").innerText = totalCostCalculate-discountedPrice;
        }
        else if(couponCode=="Couple20"){
            const discountedPrice = totalCostCalculate * 0.2;
            document.getElementById("grand-total").innerText = totalCostCalculate-discountedPrice;
        }
        else{
            alert("Please enter a valid coupon code!")
        }
    }
    
}






function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
}

const result = getConvertedValue("ticket-price");
