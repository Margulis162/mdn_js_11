// ||variables
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// ||f(x)
button.addEventListener("click", async() => {
    try{
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (err) {
        output.textContent = `Couldn't set alarm: ${err}`;
    }
});