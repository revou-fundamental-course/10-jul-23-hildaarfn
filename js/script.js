function hitungbmi() { 
    var berat = document.getElementById("bmiWeight").value; //variabel yang mengambil/mendeklarasikan nilai berat badan dari input dengan id "bmiWeight"//
    var tinggi = document.getElementById("bmiHeight").value / 100; //variabel yang mengambil dan mendeklarasikan nilai tinggi badan dari input dengan id "bmiHeight" dan membaginya dengan 100 untuk mengonversi ke meter//
    
    var bmi = berat / (tinggi * tinggi); // Menghitung BMI dengan rumus berat / (tinggi * tinggi)
    document.getElementById("contenthasil").style.display = "block";  // Mengatur tampilan elemen dengan id "contenthasil" menjadi terlihat/block //
    document.getElementById("contentunderweight").style.display = "none";  // Mengatur tampilan elemen dengan id "contentunderweight" menjadi tidak terlihat/none//
    document.getElementById("contentoverweight").style.display = "none";// Mengatur tampilan elemen dengan id "contentoverweight" menjadi tidak terlihat/none//
    document.getElementById("hasilBMI").innerHTML = bmi.toFixed(1).toString(); // Menampilkan hasil BMI yang dihitung ke dalam elemen dengan id "hasilBMI"//
  
    if (bmi < 18.5) {
      // Jika BMI kurang dari 18.5, maka tampilkan hasil untuk kategori "Berat Badan Kurang" beserta penjelasan mengenai kekuarangan berat badan//
      document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kurang";
      document.getElementById("hasilKet").innerHTML = "Anda kekurangan berat badan";
      document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
      document.getElementById("kualitasBMI").innerHTML = "Hasil BMI < 18.5";
      document.getElementById("contentunderweight").style.display = "block";
    } else if (bmi < 24.9) { // Jika BMI kurang dari 24.5, maka tampilkan hasil untuk kategori "Normal" beserta penjelasan mengenai berat badan normal//
      document.getElementById("hasilKualitas").innerHTML = "Normal";
      document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan ideal.<br />Good job!!";
      document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
      document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
    } else if (bmi < 29.9) { // Jika BMI kurang dari 29.9, maka tampilkan hasil untuk kategori "Berat Badan Berlebih" beserta penjelasan mengenai berlebihan berat badan//
      document.getElementById("hasilKualitas").innerHTML = "Berat Badan Lebih";
      document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan berlebih";
      document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. <br /> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.  <br /> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
      document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 25 dan 29.9";
      document.getElementById("contentoverweight").style.display = "block";
    } else { // Jika BMI lebih dari 30, maka tampilkan hasil untuk kategori "Obesitas" beserta penjelasan mengenai obesitas//
      document.getElementById("hasilKualitas").innerHTML = "Obesitas";
      document.getElementById("hasilKet").innerHTML = "Anda berada dalam kategori obesitas";
      document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br /> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
      document.getElementById("kualitasBMI").innerHTML = "Hasil BMI lebih dari 30";
      document.getElementById("contentoverweight").style.display = "block";
    }
    // }
  }
  
  
  function clearbmi() { 
    document.getElementById("frmbmi").reset(); //untuk mengatur ulang formulir input dengan id "frmbmi"//
    document.getElementById("contenthasil").style.display = "none"; //mengatur agar elemen tidak terlihat//
    document.getElementById("contentoverweight").style.display = "none"; //mengatur agar elemen tidak terlihat//
    document.getElementById("contentunderweight").style.display = "none"; //mengatur agar elemen tidak terlihat//
    document.getElementById("hasilKualitas").innerHTML = ""; //menghapus isi HTML dari beberapa elemen//
    document.getElementById("hasilKet").innerHTML = ""; //menghapus isi HTML dari beberapa elemen//
    document.getElementById("saranBMI").innerHTML = ""; //menghapus isi HTML dari beberapa elemen//
    document.getElementById("kualitasBMI").innerHTML = ""; //menghapus isi HTML dari beberapa elemen//
    document.getElementById("hasilBMI").innerHTML = ""; //menghapus isi HTML dari beberapa elemen//
    window.location.href = "#datapengguna";
  }
  
  function loading(condition, actionname) {
    if (!condition) { //Jika condition bernilai false, maka akan dicetak pesan "loading" ke konsol menggunakan console.log()//
      console.log("loading");
    } else { //ika condition bernilai true, juga akan dicetak pesan "loading" ke konsol menggunakan console.log()//
      console.log("loading");
    }
  }
  
