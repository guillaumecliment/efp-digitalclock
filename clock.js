function leadingZeros(inputNumber)
{  
    if (inputNumber < 10)
    {
        return `0${inputNumber}`;
    }
    return inputNumber;
};

const clock = document.getElementById("clockSpan")

function startClock()
{   
    let timeNow = new Date();
    clock.innerHTML = timeNow;

    let hours = timeNow.getHours();
    hours = leadingZeros(hours);

    let minutes = timeNow.getMinutes();
    minutes = leadingZeros(minutes);

    let seconds = timeNow.getSeconds();
    seconds = leadingZeros(seconds);

    clock.innerHTML = `${hours} ${minutes} ${seconds}`;
};

const myButton = document.getElementById("button");

myButton.addEventListener("click", () => setInterval(startClock, 1000));