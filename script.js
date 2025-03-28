// section mobile - btn 

import { Tutorials } from "./Data/tutorial.js"

let MenuBtnMobileEl = document.getElementById("menu-btn-mobile")
let MenuBtnMobileElOpenBoolean = false
let mobileMenuNavEl = document.getElementById("mobile-menu-nav")

MenuBtnMobileEl.addEventListener("click", () => {
    if (MenuBtnMobileElOpenBoolean) {
        // mobileMenuNavEl.style.display = "none"
        mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolean = false
    }
    else {
        // mobileMenuNavEl.style.display = "block"
        mobileMenuNavEl.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolean = true
    }
})

let mobileNavCloseEl = document.getElementById("mobile-nav-close")

mobileNavCloseEl.addEventListener("click", () => {
    // mobileMenuNavEl.style.display = "none"
    mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileElOpenBoolean = false
})

// ****************Tutorial-Btn ***********************

const NestedNavigationContainer=document.getElementById("nested-navigation-container_id")
let TutorialEl = document.getElementById("menu-btn-tutorial")
const nestedNavigationCloseBtn = document.getElementById("nested-navigation-close-Btn")

TutorialEl.addEventListener("click",toggleTutorial)
nestedNavigationCloseBtn.addEventListener("click",toggleTutorial)

function toggleTutorial(){
    TutorialEl.classList.toggle("bg-green")
    TutorialEl.classList.toggle("text-white")
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden")
} 


// **************Tutorial data**************** 
console.log(Tutorials)