```javascript id="x2m7ql"
let timers = new Map();

function mulaiTimer(button){

  const card = button.parentElement;

  const timerDisplay = card.querySelector(".timer");
  const status = card.querySelector(".status");

  // Cegah double timer
  if(timers.has(card)){
    return;
  }

  let waktu = 16 * 60;

  status.innerHTML = "Status : Sedang Izin";

  const interval = setInterval(function(){

    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;

    if(detik < 10){
      detik = "0" + detik;
    }

    timerDisplay.innerHTML = menit + ":" + detik;

    waktu--;

    if(waktu < 0){

      clearInterval(interval);

      timerDisplay.innerHTML = "SELESAI";

      status.innerHTML = "Status : Kembali";

      timers.delete(card);

    }

  },1000);

  timers.set(card, interval);

}

function stopTimer(button){

  const card = button.parentElement;

  const timerDisplay = card.querySelector(".timer");
  const status = card.querySelector(".status");

  if(timers.has(card)){

    clearInterval(timers.get(card));

    timers.delete(card);

  }

  timerDisplay.innerHTML = "16:00";

  status.innerHTML = "Status : Standby";

}

function filterNama(){

  const input = document
  .getElementById("searchInput")
  .value
  .toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    const nama = card
    .querySelector(".nama")
    .innerText
    .toLowerCase();

    if(nama.includes(input)){

      card.style.display = "block";

    }else{

      card.style.display = "none";

    }

  });

}

console.log("Dashboard Izin Aktif");
```
