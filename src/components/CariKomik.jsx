function CariKomik({ nilai, onUbah }) {
  return (
    <div className="cari">
      <input
        type="text"
        placeholder="Cari judul komik..."
        value={nilai}
        onChange={(e) => onUbah(e.target.value)}
      />
    </div>
  );
}
export default CariKomik;