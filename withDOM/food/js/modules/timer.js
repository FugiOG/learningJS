function timer(id, deadLine){
    //* TIMER 

    function getTimeRemaining (endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / (1000)) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setTimer(selector, endTime){
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'), 
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(timerUpdate, 1000);

        timerUpdate();

        function timerUpdate() {
            const t = getTimeRemaining(endTime);
            if (t.total <=0){
                clearInterval(timeInterval);
            }
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
        }
    }

    setTimer(id, deadLine);
}

export default timer;