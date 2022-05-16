const changeModeLR = document.querySelector("#changeModeLR")
const header = document.querySelector("header")
const secondSection = document.querySelector(".secondSection")
const container =document.querySelector(".container")
const buttonForm=document.querySelector(".button-form")
const cuenta=document.querySelector(".cuenta")

changeModeLR.addEventListener('click',()=>{
    secondSection.classList.toggle("darkMode")
    header.classList.toggle("darkMode")
    container.classList.toggle("darkMode")
    buttonForm.classList.toggle("darkmode")
    cuenta.classList.toggle("darkMode")
})