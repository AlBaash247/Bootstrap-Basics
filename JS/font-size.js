
let instaPostContainer = document.getElementById("instaPostContainer")
let instaPostTemplate = document.getElementById("instaPostTemplate")

let partTitleIndex = 1
let max = 5
let min = 1

displayPart(1)

function displayPart(partIndex) {
    const clone = instaPostTemplate.content.cloneNode(true)

    let btnPrevious = clone.getElementById("btnPrevious")
    let btnNext = clone.getElementById("btnNext")

    let txtPart = clone.getElementById("txtPart")
    let txtDisplay1 = clone.getElementById("txtDisplay1")
    let txt_hTag1 = clone.getElementById("txt_hTag1")
    let txt_pTag1 = clone.getElementById("txt_pTag1")

    let txtDisplay2 = clone.getElementById("txtDisplay2")
    let txt_hTag2 = clone.getElementById("txt_hTag2")
    let txt_pTag2 = clone.getElementById("txt_pTag2")

    txtPart.innerText = "Part " + partTitleIndex

    txtDisplay1.innerText = "Display " + partIndex
    txt_hTag1.innerText = "h" + partIndex + ". Bootstrap heading"
    txt_pTag1.innerText = ".fs-" + partIndex + " text"

    txtDisplay2.innerText = "Display " + (partIndex + 1)
    txt_hTag2.innerText = "h" + (partIndex + 1) + ". Bootstrap heading"
    txt_pTag2.innerText = ".fs-" + (partIndex + 1) + " text"

    txtPart.classList.add("display-3")

    txtDisplay1.classList.add("display-" + partIndex)
    txt_pTag1.classList.add("fs-" + partIndex)

    txtDisplay2.classList.add("display-" + (partIndex + 1))
    txt_pTag2.classList.add("fs-" + (partIndex + 1))

    btnPrevious.onclick = function () { previous(partIndex) }
    btnNext.onclick = function () { next(partIndex) }

    instaPostContainer.innerHTML = ""

    txtPart.onclick=()=>{convertDivToImage()}

    instaPostContainer.appendChild(clone)
    
}


function previous(partIndex) {
    if (min + 1 < partIndex) {
        partTitleIndex--
        partIndex -= 2
        displayPart(partIndex)
    }
}

function next(partIndex) {
    if (max - 1 > partIndex) {
        partTitleIndex++
        partIndex += 2
        displayPart(partIndex)
    }
}
