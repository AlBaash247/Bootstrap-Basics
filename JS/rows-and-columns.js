let txtExample = document.getElementById("txtExample")
let btnPrevious = document.getElementById("btnPrevious")
let btnNext = document.getElementById("btnNext")

let example_1 = document.getElementById("example_1")
let example_2 = document.getElementById("example_2")
let example_3 = document.getElementById("example_3")
let example_4 = document.getElementById("example_4")
let example_5 = document.getElementById("example_5")
let example_6 = document.getElementById("example_6")
let example_7 = document.getElementById("example_7")

let templatesArray = [
    example_1,
    example_2,
    example_3,
    example_4,
    example_5,
    example_6,
    example_7,
]

let index = 6
let max = templatesArray.length
let min = 0

btnPrevious.onclick = function () { previous() }
btnNext.onclick = function () { next() }

displayContent(0)

function displayContent(i) {
    txtExample.innerText = "Example " + (i + 1)
    templatesArray[index].classList.add("visually-hidden")
    index = i
    templatesArray[index].classList.remove("visually-hidden")
}

function previous() {
    if (min < index) {
        displayContent(index - 1)
    }
}

function next() {
    if (max - 1 > index) {
        displayContent(index + 1)
    }
}

