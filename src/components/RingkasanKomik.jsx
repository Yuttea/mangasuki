function RingkasanKomik({ jumlah, ongoing, tamat }) {
  return (
    <div className="ringkasan">
      <div className="item">
        <div className="angka">{jumlah}</div>
        <div className="label">Total Komik</div>
      </div>
      <div className="item">
        <div className="angka">{ongoing}</div>
        <div className="label">Ongoing</div>
      </div>
      <div className="item">
        <div className="angka">{tamat}</div>
        <div className="label">Tamat</div>
      </div>
    </div>
  );
}
export default RingkasanKomik;