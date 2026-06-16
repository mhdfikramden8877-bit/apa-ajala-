```javascript id="x8p4mv"
function mulaiTimer(button){

  // Cari card staff
  const card = button.parentElement;

  // Ambil status & timer
  const status = card.querySelector(".status");
  const timerDisplay = card.querySelector(".timer");

  // Cegah spam klik
  const semuaButton = card.querySelectorAll("button");

  semuaButton.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.6";
  });

  // Ubah status
  status.innerHTML = "Status : Sedang Izin";

  // Waktu 15 menit
  let waktu = 15 * 60;

  // Jalankan countdown
  const interval = setInterval(function(){

    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;

    // Tambah angka 0
    if(detik < 10){
      detik = "0" + detik;
    }

    // Tampilkan timer
    timerDisplay.innerHTML = menit + ":" + detik;

    // Kurangi waktu
    waktu--;

    // Jika selesai
    if(waktu < 0){

      clearInterval(interval);

      timerDisplay.innerHTML = "SELESAI";

      status.innerHTML = "Status : Kembali";

      // Aktifkan tombol lagi
      semuaButton.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = "1";
      });

    }

  },1000);

}

/* CONSOLE */

console.log("Dashboard Izin Aktif");
```
