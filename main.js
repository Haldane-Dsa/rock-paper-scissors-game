// 140 minutes

const handOptions = {
    "rock": "/images/Rock.png",
    "paper": "/images/Paper.png",
    "scissors": "/images/Scissors.png"
} 

const pickUserHand = (hand) => {
    // hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // show next page with hand you picked
    let contest = document.querySelector(".contest");
contest.style.display = "flex";

    // set user pick
    document.getElementById("userPickImage").src = handOptions[hand];
}