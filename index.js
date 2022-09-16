// winning paths, based on the grid and html , put the numbers in the increasing order
const winning_paths = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const boxes = document.querySelectorAll(".box");
const reset = document.getElementById("reset");

let red_path = [];
let yellow_path = [];
let rounds = [];
let choices = 0; 
let red_score = 0;
let yellow_score = 0;

boxes.forEach((box, i) => {
    box.addEventListener("click", () => {

        choices += 1;

        if (choices%2 != 0) {
            red_path.push(i);
            red_path.sort();
            console.log(red_path)
            const circle= document.getElementById("C"+i);
            circle.classList.add("button-red");
            circle.classList.add("disable"); 
            if (red_path.length == 3) {
                // include not working perfectly, sometimes it changes the result, tried different methdes, didn't work
                let red_include = winning_paths.some(a => red_path.every((v,i) => v == a[i])) ;
                if (red_include){
                paragraph = document.getElementById("winner");
                let text = document.createTextNode("Red Won! 🔴\n");
                paragraph.appendChild(text);
                red_score += 1;
                rounds += 1;
                paragraph = document.getElementById("score");
                let number = document.createTextNode("Round"+ rounds +": "+ red_score);
                paragraph.appendChild(number);
                hideAllCircles(boxes);
                red_path = [];
                yellow_path = [];
                choices = 0;}
            }
        }

        if (choices%2 == 0) {
            yellow_path.push(i);
            yellow_path.sort();
            console.log(yellow_path)
            const circle= document.getElementById("C"+i);
            circle.classList.add("button-yellow");
            circle.classList.add("disable");
            if (yellow_path.length == 3) {
                let yellow_include = winning_paths.some(a => red_path.every((v,i) => v == a[i])) ;
                if (yellow_include) {
                paragraph = document.getElementById("winner");
                let text = document.createTextNode("Yellow Won! 🟡 \n");
                paragraph.appendChild(text);
                yellow_score += 1;
                rounds += 1;
                paragraph = document.getElementById("score");
                let number = document.createTextNode("Round"+ rounds +": "+ yellow_score);
                paragraph.appendChild(number);
                hideAllCircles(boxes);
                yellow_path = [];
                red_path = [];
                choices = 0;}
            }
        }
        if (choices >8) {
            paragraph = document.getElementById("winner");
            rounds += 1;
            let text = document.createTextNode("Round :" + rounds + "No one won!");
            paragraph.appendChild(text);
            choices = 0;
            yellow_path = [];
            red_path = [];
            hideAllCircles(boxes)
        } 
})

})

const hideAllCircles = (boxes) => {
    boxes.forEach((box,i) => {
        const circle = document.getElementById("C"+i);
        if (circle.classList.contains("button-red"))
        {circle.classList.remove("button-red")}
        if (circle.classList.contains("button-yellow"))
        {circle.classList.remove("button-yellow")}
})
}

reset.addEventListener("click", () => {
    window.location.reload()
})