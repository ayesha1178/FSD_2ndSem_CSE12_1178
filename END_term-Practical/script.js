document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("checkBtn");
    const input = document.getElementById("numberInput");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {

        const value = input.value;

        if (value === "") {
            result.innerText = "Please enter a number.";
            return;
        }

        const num = Number(value);

        if (num % 2 === 0) {
            result.innerText = num + " is Even";
        } else {
            result.innerText = num + " is Odd";
        }
    });

});
