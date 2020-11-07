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
const products = document.getElementById("products");
const order = document.getElementById("order");
const selectorList = document.getElementById("list");
const account = document.getElementById("account");
const terminal = document.getElementById("terminal");
const total = document.getElementById("total");
const chosenPackage = document.querySelectorAll(".calc-select-option");

for (let i=0; i <= formAll.length; i++) {
    function showSummary() {
        const productsValue = formAll.elements[0].value;
        const orderValue = formAll.elements[1].value;
        let sumProducts = 0;
        let sumOrder = 0;
        let sumPackage = 0;
        let sumAccount = 0;
        let sumTerminal = 0;

        if (productsValue > 0) {
            products.classList.remove("summary-products-show");
            products.children[1].innerText = productsValue + " * $ 0.5";
            products.children[2].innerText = "$" + productsValue *  0.5;
            sumProducts = productsValue *  0.5;
        } else if (productsValue <= 0) {
            products.classList.add("summary-products-show");
        }

        if (orderValue > 0) {
            order.classList.remove("summary-order-show");
            order.children[1].innerText = orderValue + " * $ 0.5";
            order.children[2].innerText = "$" + orderValue *  0.5;
            sumOrder = orderValue *  0.5;
        } else if (orderValue <= 0) {
            order.classList.add("summary-order-show");
        }
        
        if (choosePackageBox.innerText === "Basic" ||
            choosePackageBox.innerText === "Professional" ||
            choosePackageBox.innerText === "Premium") {
                selectorList.classList.remove("summary-package-show");
                switch(choosePackageBox.innerText) {
                    case "Basic":
                        selectorList.children[1].innerText = "Basic";
                        selectorList.children[2].innerText = "$0";
                        sumPackage = 0;
                        break;
                    case "Professional":
                        selectorList.children[1].innerText = "Professional";
                        selectorList.children[2].innerText = "$25";
                        sumPackage = 25;
                        break;
                    case "Premium":
                        selectorList.children[1].innerText = "Premium";
                        selectorList.children[2].innerText = "$60";
                        sumPackage = 60;
                        break;
                }
                for (let j=0; j < 3; j++) {
                        choosePackageList.children[j].addEventListener("click", showSummary);
                    }
                // ODPALA MI showSummary 3 razy za kazdym kliknieciem. Why? Czy to problem?
                // choosePackageList.children[0].addEventListener("click", showSummary);
                // choosePackageList.children[1].addEventListener("click", showSummary);
                // choosePackageList.children[2].addEventListener("click", showSummary);

        } else {
                selectorList.classList.add("summary-package-show");
        }
    
        if (formAll.elements[2].checked === true) {
            account.classList.remove("summary-account-show");
            account.children[2].innerText = "$35";
            sumAccount = 35;
        } else if (formAll.elements[2].checked === false) {
            account.classList.add("summary-account-show");
        }
        if (formAll.elements[3].checked === true) {
            terminal.classList.remove("summary-terminal-show");
            terminal.children[2].innerText = "$5";
            sumTerminal = 5;
        } else if (formAll.elements[3].checked === false) {
            terminal.classList.add("summary-terminal-show");
        }

        if (formAll.elements[0].value > 0 ||
            formAll.elements[1].value > 0 ||
            formAll.elements[2].checked === true ||
            formAll.elements[3].checked === true) {
                total.classList.remove("summary-total-show");
                const sumTotal = sumTerminal + sumAccount + sumPackage + sumProducts + sumOrder;
                total.children[1].innerText = "$" + sumTotal;
            } else {
                total.classList.add("summary-total-show");
            }    
    }
    formAll.children[i].addEventListener("change", showSummary);
}


