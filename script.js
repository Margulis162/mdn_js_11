// ||variables
const name1 = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// ||f(x)
function alarm(person, delay) {
    return new Promise((resolve, rejected) => {
        if(delay < 0){
            throw new Error("Alarm delay must be positive");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}`)
        }, delay)
    })
}



            //    event listenr 
button.addEventListener("click", async function () {
        try {
            console.log(name1.value, delay.value);
            const message = await alarm(name1.value, delay.value);
            output.textContent = message;
        } catch (err) {
            output.textContent = `Couldn't set alarm: ${err}`;
        }
    });