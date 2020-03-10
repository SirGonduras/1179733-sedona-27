var btn_form = document.querySelector(".btn-form");
var date_form = document.querySelector(".selection-form");

var date_in = date_form.querySelector("[name=date-in]");

var adults_count = date_form.querySelector("[name=adults-count]");
var btn_minus_adult = date_form.querySelector(".btn-minus-adult");
var btn_plus_adult = date_form.querySelector(".btn-plus-adult");

var childrens_count = date_form.querySelector("[name=childrens-count]");
var btn_minus_children = date_form.querySelector(".btn-minus-children");
var btn_plus_children = date_form.querySelector(".btn-plus-children");


// Обработка формы
date_form.classList.add("form-show");

btn_form.addEventListener("click", function (evt) {
    evt.preventDefault();

    if(date_form.classList.contains("form-show")) {
        date_form.classList.remove("form-show");
    } else {
        date_form.classList.add("form-show");
        date_in.focus();
    }
});

// Клавиши плюс, минус
btn_minus_adult.addEventListener("click", function (evt) {
    evt.preventDefault();

    if(adults_count.value > 1)
        adults_count.value --;
});

btn_plus_adult.addEventListener("click", function (evt) {
    evt.preventDefault();

    adults_count.value ++;
});

btn_minus_children.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    if(childrens_count.value > 0)
        childrens_count.value --;
});

btn_plus_children.addEventListener("click", function (evt) {
    evt.preventDefault();

    childrens_count.value ++;
});

