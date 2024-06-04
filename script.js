let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let grid = document.querySelector(".grid")


btn.addEventListener("click", () => {
     let inputValue = input.value;
     let numArr = [];;
        if (inputValue > 0 && inputValue < 31) {
            for (let i = 0; i < inputValue; i++) {
                let randomNum = Math.round((Math.random() * 30));
                while (numArr.includes(randomNum) || randomNum === 0) {
                    randomNum = Math.round((Math.random() * 30));
                }
                numArr.push(randomNum);
                let newElement = document.createElement("div");
                newElement.className = "grid";
                newElement.textContent = randomNum;
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

