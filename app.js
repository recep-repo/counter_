const number = document.getElementById("number");
const buttons = document.querySelectorAll(".btn") 

console.log(number);

let count = 0

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const style = e.currentTarget.classList
        if(style.contains("increase")){
            count++
            number.innerHTML = count
        }
        if(style.contains("reset")){
            count = 0
            number.innerHTML = count
        }
        if(style.contains("decrease")){
            count--
            number.innerHTML = count
        }
        if(count>0){
            number.style.color = "green"
        }
        if(count<0){
            number.style.color = "red"
        }
        if(count == 0){
            number.style.color = "black"
        }

    })
})