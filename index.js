const display = document.querySelector('.display');
const btn = document.querySelectorAll('.btn')


btn.forEach((item) => {
    item.addEventListener('click', (e) => {
        let itemText = e.target.textContent;
        
        if (itemText === "AC") {
            display.value = ""
        }

        if (itemText === "C") {
            display.value = display.value.slice (0, -1)
        }

        if (itemText === "=") {
            display.value = eval(display.value)
        }

        if (itemText === "x2") {
            display.value = Math.pow (display.value, 2)
        }

        if (itemText !== "C" && itemText !== "AC" && itemText !== "=" && itemText !== "x2") {
            display.value += itemText;
        }

    });
});

