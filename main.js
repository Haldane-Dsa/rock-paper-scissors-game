// min 140

const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
} 

const pickUserHand = (hand) => {
    console.log(hand);
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
}

let contest = document.querySelector('.contest');
contest.style.display = "flex";

// set user pick

document.getElementById("userPickImage").src = handOptions(hand);
