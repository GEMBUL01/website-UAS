document.getElementById('loanForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const duration = parseInt(document.getElementById('duration').value);
  const interestRate = parseFloat(document.getElementById('interest').value) / 100;

  const totalInterest = amount * interestRate * duration;
  const totalPayment = amount + totalInterest;
  const monthlyInstallment = totalPayment / duration;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>Rincian Transaksi</h3>
    <p><strong>Nama:</strong> ${jaka}</p>
    <p><strong>Jumlah Pinjaman:</strong> Rp ${amount.toLocaleString()}</p>
    <p><strong>Durasi:</strong> ${duration} bulan</p>
    <p><strong>Total Bunga:</strong> Rp ${totalInterest.toLocaleString()}</p>
    <p><strong>Total yang Harus Dibayar:</strong> Rp ${totalPayment.toLocaleString()}</p>
    <p><strong>Cicilan per Bulan:</strong> Rp ${monthlyInstallment.toLocaleString()}</p>
  `;
});
