const colors = ["green", "red", "orange", "pink", "aqua"]
const button = document.getElementById("btn")
const color = document.querySelector(".color")

button.addEventListener("click", function(){
// get randomw number between 0-3
const randomNumber =getRandomNumber()
document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
    color.style.color = colors[randomNumber]
})

function getRandomNumber(){
  
    return randomNumber = Math.floor(Math.random() * colors.length)
   
}