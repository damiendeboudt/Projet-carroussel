let imageOne = document.getElementById("img1")
let imageTwo = document.getElementById("img2")
let imageThree = document.getElementById("img3")


document.getElementById("one").addEventListener("click", () => {
    imageOne.style.zIndex = "1"
    imageTwo.style.zIndex = "0"
    imageThree.style.zIndex = "0"
})
document.getElementById("two").addEventListener("click", () => {
    imageOne.style.zIndex = "0"
    imageTwo.style.zIndex = "1"
    imageThree.style.zIndex = "0"
})
document.getElementById("three").addEventListener("click", () => {
    imageOne.style.zIndex = "0"
    imageTwo.style.zIndex = "0"
    imageThree.style.zIndex = "1"
})