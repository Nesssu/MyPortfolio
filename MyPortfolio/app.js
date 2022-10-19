let sert_arrow_1 = false;
let sert_arrow_2 = false;
let sert_arrow_3 = false;

let desc_1 = false;
let desc_2 = false;
let desc_3 = false;

function copy_number() {
    navigator.clipboard.writeText("+358451280830");
    var span_number = document.getElementById("copy-number");
    span_number.textContent = "Number copied!";
}

function copy_email() {
    navigator.clipboard.writeText("nestori.kangashaka@student.lut.fi");
    var span_email = document.getElementById("copy-email");
    span_email.textContent = "Email copied!";
}

function change_number_back() {
    var span_number = document.getElementById("copy-number");
    span_number.textContent = "Copy the number";
}

function change_email_back() {
    var span_email = document.getElementById("copy-email");
    span_email.textContent = "Copy the email";
}

function rotate_arrow(id) {
    if (id === 1) {
        let icon = document.getElementById("sertificates-arrow-1");
        let img = document.getElementById("sertification-1");
        if (sert_arrow_1 == false) {
            icon.classList.add("arrow-rotate-X");
            img.classList.add("show-image");
            img.classList.remove("hide-image");
            sert_arrow_1 = true;
        } else {
            icon.classList.remove("arrow-rotate-X");
            img.classList.add("hide-image");
            img.classList.remove("show-image");
            sert_arrow_1 = false;
        }
    }
    else if (id === 2) {
        let icon = document.getElementById("sertificates-arrow-2");
        let img = document.getElementById("sertification-2");
        if (sert_arrow_2 == false) {
            icon.classList.add("arrow-rotate-X");
            img.classList.add("show-image");
            img.classList.remove("hide-image");
            sert_arrow_2 = true;
        } else {
            icon.classList.remove("arrow-rotate-X");
            img.classList.add("hide-image");
            img.classList.remove("show-image");
            sert_arrow_2 = false;
        }
    }
    else if (id === 3) {
        let icon = document.getElementById("sertificates-arrow-3");
        let img = document.getElementById("sertification-3");
        if (sert_arrow_3 == false) {
            icon.classList.add("arrow-rotate-X");
            img.classList.add("show-image");
            img.classList.remove("hide-image");
            sert_arrow_3 = true;
        } else {
            icon.classList.remove("arrow-rotate-X");
            img.classList.add("hide-image");
            img.classList.remove("show-image");
            sert_arrow_3 = false;
        }
    }
}
