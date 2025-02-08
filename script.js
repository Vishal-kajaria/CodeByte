// section mobile - btn 

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