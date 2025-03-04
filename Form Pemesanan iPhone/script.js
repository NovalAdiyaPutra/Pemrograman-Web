document.addEventListener("DOMContentLoaded", function() {
    const hargaModel = {"iPhone 13": 8799000,"iPhone 14": 10999000,"iPhone 15": 12299000};

    const modelSelect = document.querySelector("#model");
    const warnaSelect = document.querySelector("#warna");
    const hargaInput = document.querySelector("#harga");
    const totalInput = document.querySelector("#total");
    const jumlahInput = document.querySelector("#jumlah");
    const hitungButton = document.querySelector("#hitung");
    const btnPesan = document.querySelector("#pesan");
    const checkboxPersetujuan = document.querySelector("#persetujuan");
    const img = document.querySelector("#iphoneImage");

     // Fungsi untuk mengupdate harga dan gambar
     function updateHargaDanGambar() {
        let model = modelSelect.value;
        let warna = warnaSelect.value;

        // Jika model belum dipilih, kosongkan harga dan gambar
        if (model === "") {
            hargaInput.value = "";
            img.src = "iphone.png"; // Gambar default
            return;
        }

        hargaInput.value = hargaModel[model];

        // Mengubah gambar berdasarkan model dan warna
        let imgName = "";
        if (model === "iPhone 13") {
            imgName = "iphone13";
        } else if (model === "iPhone 14") {
            imgName = "iphone14";
        } else if (model === "iPhone 15") {
            imgName = "iphone15";
        }

        let warnaFile = "";
        if (warna === "Hitam") {
            warnaFile = "hitam";
        } else if (warna === "Pink") {
            warnaFile = "pink";
        } else if (warna === "Biru") {
            warnaFile = "biru";
        }

        img.src = `${imgName}_${warnaFile}.png`;

    };

    // Event saat model atau warna berubah
    modelSelect.addEventListener("change", updateHargaDanGambar);
    warnaSelect.addEventListener("change", updateHargaDanGambar);

    // Mengatur harga saat halaman dimuat
    updateHargaDanGambar();

    hitungButton.addEventListener("click", hitungTotal);

    function hitungTotal() {
        const harga = parseInt(hargaInput.value) || 0;
        const jumlah = parseInt(jumlahInput.value) || 0;
        totalInput.value = harga * jumlah;
    }

    checkboxPersetujuan.addEventListener("change", function() {
        btnPesan.disabled = !this.checked;
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Pesanan Anda telah berhasil dikirim!");
        this.reset();
        hargaInput.value = "";
        totalInput.value = "";
        btnPesan.disabled = true;
        img.src = "iphone.png"; // Kembali ke gambar default
    });

});