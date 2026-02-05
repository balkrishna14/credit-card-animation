// GET ELEMENTS
const cardInner = document.getElementById("cardInner");
const numberInput = document.getElementById("numberInput");
const nameInput = document.getElementById("nameInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const cvvInput = document.getElementById("cvvInput");
const cardNumber = document.getElementById("cardNumber");
const cardHolder = document.getElementById("cardHolder");
const cardExpiry = document.getElementById("cardExpiry");
const cardCVV = document.getElementById("cardCVV");
const card = document.querySelector(".card");

let isFlipped = false;

const updateCardNumber = function () {
    let digits = numberInput.value.replace(/\D/g, "");
    digits = digits.substring(0, 16);

    numberInput.value = digits.replace(/(.{4})/g, "$1 ").trim();

    let filled = digits + "XXXXXXXXXXXXXXXX".slice(digits.length);
    cardNumber.innerText = filled.replace(/(.{4})/g, "$1 ").trim();
};

const updateName = function () {
    let value = nameInput.value.replace(/[^A-Z ]/gi, "").toUpperCase();
    nameInput.value = value;
    cardHolder.innerText = value || "NAME ON CARD";
};

const updateExpiry = function () {
    cardExpiry.innerText = monthInput.value + "/" + yearInput.value;
};

const flipCard = function (state) {
    isFlipped = state;
    cardInner.style.transform =
        isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";
};

const toggleFlip = function () {
    if (document.activeElement === cvvInput) return;
    flipCard(!isFlipped);
};

const updateCVV = function () {
    let value = cvvInput.value.replace(/\D/g, "");
    value = value.substring(0, 3);
    cvvInput.value = value;
    cardCVV.innerText = value || "CVV";
};
numberInput.addEventListener("input", updateCardNumber);
nameInput.addEventListener("input", updateName);
monthInput.addEventListener("change", updateExpiry);
yearInput.addEventListener("change", updateExpiry);


cvvInput.addEventListener("focus", function () {
    flipCard(true);
});



cvvInput.addEventListener("blur", function () {
    flipCard(false);
});

cvvInput.addEventListener("input", updateCVV);
card.addEventListener("click", toggleFlip);