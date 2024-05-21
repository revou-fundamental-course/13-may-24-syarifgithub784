document.getElementById('luassegitiga').addEventListener('submit', function(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);


    const luas = 0.5 * alas * tinggi;
    document.getElementById('hasilluas').textContent = 'Luas segitiga: ' + luas.toFixed(2);

});


document.getElementById('kelilingsegitiga').addEventListener('submit', function(event) {
    event.preventDefault();

    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    var keliling = sisi1 + sisi2 + sisi3;

    document.getElementById('hasilkeliling').innerHTML = '<p>Keliling Segitiga: ' + keliling.toFixed(2) + '</p>';
});

document.getElementById('kelilingsegitiga').addEventListener('reset', function() {
    document.getElementById('hasilkeliling').innerHTML = '';
});