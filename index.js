// winning paths, based on the grid and html , put the numbers in the increasing order
winning_paths = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const boxes = document.querySelectorAll(".box");
let red_path = [];
let yellow_path = [];
let red_turn = false;
let yellow_turn = false;
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
                let red_include = winning_paths.some(a => red_path.every((v,i) => v == a[i])) ;
                if (red_include){
                paragraph = document.getElementById("winner");
                let text = document.createTextNode("Red Won! 🔴");
                paragraph.appendChild(text);
                red_score += 1;
                paragraph = document.getElementById("score");
                let number = document.createTextNode(score);
                paragraph.appendChild(number);
                hideAllCircles(boxes);}
                red_path=[];
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
                let text = document.createTextNode("Yellow Won! 🟡");
                paragraph.appendChild(text);
                yellow_score += 1;
                paragraph = document.getElementById("score");
                let number = document.createTextNode(score);
                paragraph.appendChild(number);
                hideAllCircles(boxes);}
                yellow_path=[];
            }
        
    
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
