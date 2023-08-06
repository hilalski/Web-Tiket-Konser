const form = document.getElementById('form');
const noId = document.getElementById('noId');
const name = document.getElementById('name');
const noTelepon = document.getElementById('noTelepon');
const kuantitas = document.getElementById('kuantitas');
const kategori = document.getElementById('kategori');
const pembayaran = document.getElementById('pembayaran');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const noIdValue = noId.value;
  const nameValue = name.value;
  const noTeleponValue = noTelepon.value;
  const kuantitasValue = kuantitas.value;
  const kategoriValue = kategori.value;
  const pembayaranValue = pembayaran.value;

  // Membuat objek data pemesan
  const pemesan = {
    noId: noIdValue,
    name: nameValue,
    noTelepon: noTeleponValue,
    kuantitas: kuantitasValue,
    kategori: kategoriValue,
    pembayaran: pembayaranValue
  };

  // Simpan objek data pemesan dalam array pesanan
  let pesanan = [];
  pesanan.push(pemesan);

  // Simpan array pesanan dalam Local Storage
  localStorage.setItem('pesanan', JSON.stringify(pesanan));

  // Ambil nilai harga yang dipilih
  let hargaValue = '';
  if(kategoriValue === 'VIP'){
    hargaValue = '500000';
  } else if(kategoriValue === 'Silver'){
    hargaValue = '250000';
  } else if(kategoriValue === 'Bronze'){
    hargaValue = '100000';
  }

  // Membuat objek data invoice
  const invoice = {
    noId: noIdValue,
    kategori: kategoriValue,
    harga: hargaValue
  };

  // Simpan objek data invoice dalam Local Storage
  localStorage.setItem('invoice', JSON.stringify(invoice));

  // Redirect ke halaman invoice
  window.location.href = "invoice.html";
});
