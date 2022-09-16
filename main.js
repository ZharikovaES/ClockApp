const clock = document.querySelector('#clock');

if (clock) {
    const dashesWrapper = clock.querySelector('.clock__dashes-wrapper');
    const numbersWrapper = clock.querySelector('.clock__numbers-wrapper');
    const handsWrapper = clock.querySelector('.clock__hands-wrapper');

    if (dashesWrapper && numbersWrapper && handsWrapper) {
        dashesRepeat(dashesWrapper);
        numbersRepeat(numbersWrapper);
        handsCreate(handsWrapper);
    }
}

// размещение меток на циферблате
function dashesRepeat(dashesWrapper) {
    let degs = 0;

    for (let i = 0; i < 12; i++) {
        const dash = document.createElement('div');
        dash.classList.add('clock__dash', 'clock-label');
        dash.style.transform = `rotate(${degs}deg)`;
        degs += 30;
        dashesWrapper.append(dash);
    }
}

// размещение чисел на циферблате
function numbersRepeat(numbersWrapper) {
    let degs = 0;

    for (let i = 0; i < 12; i++) {
        const number = document.createElement('div');
        let hour = i;
        number.innerHTML = `<p>${hour === 0 ? 12 : hour}</p>`;
        number.classList.add('clock__number', 'clock-label');
        number.style.transform = `rotate(${degs}deg)`;
        number.querySelector('p').style.transform = `rotate(-${degs}deg)`;
        degs += 30;
        numbersWrapper.append(number);
    }
}

// размещение стрелок на циферблате
function handsCreate(handsWrapper) {
    const hourHand = document.createElement('div');
    const minutHand = document.createElement('div');
    const secondHand = document.createElement('div');

    hourHand.classList.add('clock-label', 'clock__hand', 'hand-clock', 'hand-hour-clock');
    minutHand.classList.add('clock-label', 'clock__hand', 'hand-clock', 'hand-minut-clock');
    secondHand.classList.add('clock-label', 'clock__hand', 'hand-clock', 'hand-sec-clock');

    setInterval(function() {
        const date = new Date();

        let sec = date.getSeconds();
        let minuts = date.getMinutes();
        let hour = date.getHours() >= 12 ? date.getHours() - 12 : date.getHours();
        
        let minutsToSec = minuts * 60 + sec;
        let hourToSec = hour * 60 * 60 + minuts + sec
    
        secondHand.style.transform = `rotate(${sec * 6}deg)`;
        minutHand.style.transform = `rotate(${minutsToSec / 10}deg)`;
        hourHand.style.transform = `rotate(${hourToSec / 120}deg)`;
    });

    handsWrapper.append(hourHand);
    handsWrapper.append(minutHand);
    handsWrapper.append(secondHand);
}