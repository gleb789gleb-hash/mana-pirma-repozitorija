

let sk = 10



console.log("Ziņojums")
console.warn("Brīdinājums")
console.error("Kļūda")


let num = 10 
num = num + 5
let a = 1
let b = 2.5
let c = "asda"
let d = true

var num2 = 15

const number = 100

let x = 4
if (x > 5) {
    console.log(x)
}
else if (x < 2) {
    console.log(x - 2)
}
else {
    console.log(x + 5)
}

let i = 2.5
let j = "2.5"

if (i == j) {
    console.log("i ir vienāds ar j")
}
else {
    console.log("i nav vienāds ar j")
}

if (i === j) {
    console.log("i ir vienāds ar j")
}
else {
    console.log("i nav vienāds ar j")
}


if (!(i > j || i == j && i === j)) {
    console.log(i + j)
}

x = 0
while (x < 5) {
    console.log(x)
    x += 1
}

console.log("-----------------")
for (let x = 1; x < 10; x += 2) {
    console.log(x)
}

console.log("-----------------")
for (; sk > 1; sk -= 3) {
    console.log(sk)
}

sayHello("John")

function sayHello(name) {
    console.log("Hello, " + name)
}
myFunction("John")


const myFunction = (name) => {
    console.log("Goodbye, " + name)
}

document.addEventListener("DOMContentLoaded", () => {
    
})

const weapons = [
    "bat.png",
    "knife.png",
    "pistol.png",
    "chainsaw.png"
]

let weaponIndex = 0

function upgrade() {

    if (amount >= cost) {

        amount -= cost

        bonus *= 2

        cost *= 2

        if (weaponIndex < weapons.length - 1) {

            weaponIndex++

            clickImg.src = weapons[weaponIndex]

if (weapons[weaponIndex] === "pistol.png") {
    clickImg.style.width = "550px"
}
else {
    clickImg.style.width = "220px"
}
        }

        el.innerHTML = amount

        alert(`Upgrade bought! Bonus = ${bonus}`)
    }

    else {

        alert(`Not enough money!`)
    }
}
