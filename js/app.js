const choosePackageBox = document.querySelector(".calc-select-default");
console.log(choosePackageBox.innerText); 
const choosePackageList = document.querySelector(".calc-select-list");

function showSelectionBox() {
    choosePackageList.classList.toggle("calc-select-list-show");
}
choosePackageBox.addEventListener("click", showSelectionBox);

for (let i=0; i < 3; i++) {
    function choosePackage() {
        choosePackageBox.innerText = choosePackageList.children[i].innerText;
        choosePackageList.classList.toggle("calc-select-list-show");
    }
    choosePackageList.children[i].addEventListener("click", choosePackage);
}

const formAll = document.querySelector(".calc-form");
console.log(formAll);
const products = document.getElementById("products");
const order = document.getElementById("order");
const selectorList = document.getElementById("list");
const account = document.getElementById("account");
const terminal = document.getElementById("terminal");
const total = document.getElementById("total");
const chosenPackage = document.querySelectorAll(".calc-select-option");
//const zzz = choosePackageBox("classList");

for (let i=0; i <= formAll.length; i++) {
    function showSummary() {
        console.log(2);
        if (formAll.elements[0].value > 0) {
            products.classList.remove("summary-products-show");
        } else if (formAll.elements[0].value <= 0) {
            products.classList.add("summary-products-show");
        }

        if (formAll.elements[1].value > 0) {
            order.classList.remove("summary-order-show");
        } else if (formAll.elements[1].value <= 0) {
            order.classList.add("summary-order-show");
        }
        
        if (choosePackageBox.innerText === "Basic" ||
            choosePackageBox.innerText === "Professional" ||
            choosePackageBox.innerText === "Premium") {
                selectorList.classList.remove("summary-package-show");
                for (let j=0; j < 3; j++) {
                    choosePackageList.children[j].addEventListener("click", showSummary);
                }
        } else {
                selectorList.classList.add("summary-package-show");
        }
    
        if (formAll.elements[2].checked === true) {
            account.classList.remove("summary-account-show");
        } else if (formAll.elements[2].checked === false) {
            account.classList.add("summary-account-show");
        }

        if (formAll.elements[3].checked === true) {
            terminal.classList.remove("summary-terminal-show");
        } else if (formAll.elements[3].checked === false) {
            terminal.classList.add("summary-terminal-show");
        }

        if (formAll.elements[0].value > 0 ||
            formAll.elements[1].value > 0 ||
            formAll.elements[2].checked === true ||
            formAll.elements[3].checked === true) {
                total.classList.remove("summary-total-show");
            } else {
                total.classList.add("summary-total-show");
            }    
    }
    formAll.children[i].addEventListener("change", showSummary);
}


