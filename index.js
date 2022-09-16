let yellow_turn;
const redclass = "red-button";
const yellowclass= "yellow-button";

const reset = document.getElementById("reset");

const boxes = document.querySelectorAll("box");

boxes.forEach(box => {
    box.addEventListener("click", handleClick, { once: true }) 
});

const handleClick = (e) => {
    const box = e.target;
    const current_class = yellow_turn ? yellowclass : redclass;
    placeMarker(box, current_class);

    swapTurns();
}

const placeMarker = (box, current_class) => {
    box.classList.add(current_class)
};

reset.addEventListener("click", () =>{
    window.location.reload();
});

const swapTurns = () => {
    yellow_turn = !yellow_turn;
} 
