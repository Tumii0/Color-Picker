const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const button = document.getElementById("btn")
const color = document.querySelector(".color")

button.addEventListener("click", function(){
let hexColor = "#"
// loop starting from 0-6
for (let i =0; i<6; i++){
    // making the loop choose only 6 random values from the hex array 
    hexColor += hex[getRandomNumber()]
}
document.body.style.backgroundColor = hexColor
color.textContent = hexColor
color.style.color = hexColor
})

// getting random number from the hex array
function getRandomNumber(){
    return Math.floor(Math.random()* hex.length)
}

  

 