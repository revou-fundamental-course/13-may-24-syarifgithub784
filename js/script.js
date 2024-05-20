document.getElementById('luassegitiga').addEventListener('submit', function(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!alas || !tinggi) {
        document.getElementById('hasil').textContent = 'Silakan masukkan angka yang valid untuk alas dan tinggi.';
        return;
    }

    const luas = 0.5 * alas * tinggi;

    document.getElementById('hasil').textContent = 'Luas segitiga: ' + luas.toFixed(2);
});