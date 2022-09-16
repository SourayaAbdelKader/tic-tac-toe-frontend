// winning paths, based on the grid and html , put the numbers in the increasing order
winning_paths = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const boxes = document.querySelectorAll(".box");
let red_path = [];
let yellow_path = [];
let red_turn = false;
let yellow_turn = false;
let choices = 0; 

boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        choices += 1;
        console.log(i);
        console.log(choices);
        if (choices%2 != 0) {
            red_path.push(i);
            const circle= document.getElementById("C"+i);
            circle.classList.add("button-red")
        }

        if (choices%2 == 0) {
            yellow_path.push(i);
            const circle= document.getElementById("C"+i);
            circle.classList.add("button-yellow")
        }
})

})