// section mobile - btn 

let MenuBtnMobileEl = document.getElementById("menu-btn-mobile")
let MenuBtnMobileElOpenBoolean = false
let mobileMenuNavEl = document.getElementById("mobile-menu-nav")

MenuBtnMobileEl.addEventListener("click", () => {
    if (MenuBtnMobileElOpenBoolean) {
        mobileMenuNavEl.style.display = "none"
        MenuBtnMobileElOpenBoolean = false
    }
    else {
        mobileMenuNavEl.style.display = "block"
        MenuBtnMobileElOpenBoolean = true
    }
})

let mobileNavCloseEl = document.getElementById("mobile-nav-close")

mobileNavCloseEl.addEventListener("click", () => {
    mobileMenuNavEl.style.display = "none"
    MenuBtnMobileElOpenBoolean = false
})