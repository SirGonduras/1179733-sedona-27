if (!document.querySelector) {
    document.querySelector = function (selectors) {
      var elements = document.querySelectorAll(selectors);
      return (elements.length) ? elements[0] : null;
    };
}

var btn_form = document.querySelector(".btn-form");
var date_form = document.querySelector(".selection-form");

var date_in = date_form.querySelector("[name=date-in]");
var date_out = date_form.querySelector("[name=date-out]");
var adults_count = date_form.querySelector("[name=adults-count]");
var childrens_count = date_form.querySelector("[name=childrens-count]");

var btn_minus_adult = date_form.querySelector(".btn-minus-adult");
var btn_plus_adult = date_form.querySelector(".btn-plus-adult");

var btn_minus_children = date_form.querySelector(".btn-minus-children");
var btn_plus_children = date_form.querySelector(".btn-plus-children");


// Обработка формы

date_form.classList.add("form-hide");

btn_form.addEventListener("click", function (evt) {
    evt.preventDefault();

    if(date_form.classList.contains("form-hide")) {
        date_form.classList.remove("form-anim-up");
        date_form.classList.add("form-anim-down");
        date_form.classList.remove("form-hide");
        date_in.focus();
    } else {
        date_form.classList.remove("form-anim-down");
        date_form.classList.remove("form-anim-down");
        date_form.classList.add("form-anim-shake");
        setTimeout(function() {date_form.classList.add("form-hide")}, 600);
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

date_form.addEventListener("submit", function (evt) {
    if (!date_in.value || !password.value || !adults_count.value ||
            !childrens_count.value) {
        evt.preventDefault();
        date_form.classList.remove("form-anim-shake");
        date_form.offsetWidth = date_form.offsetWidth;
        date_form.classList.add("form-anim-shake");
        console.log("Заполните поля");
    }
});