let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let grid = document.querySelector(".grid")


btn.addEventListener("click", () => {
     let inputValue = input.value;
        if (inputValue > 0 && inputValue < 31) {
            let divs = Array.from(container.getElementsByClassName("grid"));
            for (let i = 0; i < inputValue; i++) {
                let newElement = document.createElement("div");
                newElement.className = "grid"
                let divNumber = Math.round((Math.random() * 30));
                divs.includes
                newElement.textContent = divNumber;
                container.appendChild(newElement)
            } 
        } else if (inputValue === "") {
            alert("Input is empty")
        } else {
            alert("Your number does not range from 1-30");
            alert("Please try again");
            input.value = "";
        }
})

grid.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
})