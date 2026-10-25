function KartuKomik({ id, judul, penulis, genre, chapter, status, gambar, onHapus }) {
  return (
    <div className="kartu">
      <div className="sampul">
        {gambar ? (
          <img src={gambar} alt={judul} />
        ) : (
          judul.charAt(0).toUpperCase()
        )}
      </div>
      <div className="isi">
        <h3>{judul}</h3>
        <p className="penulis">oleh {penulis}</p>
        <p className="chapter">Chapter terakhir: {chapter}</p>
        {genre && <span className="badge">{genre}</span>}
        <span className={status === "Ongoing" ? "status ongoing" : "status tamat"}>
          {status}
        </span>
        <button className="btn-hapus" onClick={() => onHapus(id)}>Hapus</button>
      </div>
    </div>
  );
}
export default KartuKomik;