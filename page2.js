const invoiceData = localStorage.getItem('invoice');
const pesananData = localStorage.getItem('pesanan');

// Mengubah string kembali menjadi objek
const invoice = JSON.parse(invoiceData);
const pesanan = JSON.parse(pesananData);

// Menampilkan data pada invoice
document.getElementById('no-Id').textContent = invoice.noId;
document.getElementById('kategori').textContent = invoice.kategori;
document.getElementById('harga').textContent = invoice.harga;
document.getElementById('kuantitas').textContent = pesanan[0].kuantitas;
document.getElementById('name').textContent = pesanan[0].name;
document.getElementById('no-Telepon').textContent = pesanan[0].noTelepon;
document.getElementById('pembayaran').textContent = pesanan[0].pembayaran;

// Menghitung total harga dan pajak
const totalHarga = invoice.harga * pesanan[0].kuantitas;
const tax = 0.1 * totalHarga;

// Menampilkan total harga dan pajak
document.getElementById('totalHarga').textContent = totalHarga;
document.getElementById('tax').textContent = tax;

// Menghitung jumlah pembayaran
const jumlahPembayaran = totalHarga + tax;

// Menampilkan jumlah pembayaran
document.getElementById('jumlahPembayaran').textContent = jumlahPembayaran;
