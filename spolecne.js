//Ukol 3

const menuEl = document.querySelector("#menu-tlacitko")

menuEl.addEventListener("click", () => {
    const polozkaMenuEl = document.querySelector("#menu-polozky")
    polozkaMenuEl.classList.toggle("show")
    const krizekEl = document.querySelector("i")
    krizekEl.classList.toggle("fa-xmark")
})


