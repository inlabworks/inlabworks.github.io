(function () {
  const deadline = new Date("2021-10-27T01:00:00Z");
  const pad = (num, size) => {
    const s = "0" + num;
    return s.substr(s.length - size);
  };

  const getTimeRemaining = (end) => {
    let total = new Date(end) - new Date();
    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  };

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const clock = (end) => {
    const timeinterval = setInterval(() => {
      const time = getTimeRemaining(end);

      if (time.total <= 0) {
        clearInterval(timeinterval);
      } else {
        days.innerHTML = pad(time.days, 2);
        hours.innerHTML = pad(time.hours, 2);
        minutes.innerHTML = pad(time.minutes, 2);
        seconds.innerHTML = pad(time.seconds, 2);
      }
    }, 1000);
  };

  clock(deadline);
})();
