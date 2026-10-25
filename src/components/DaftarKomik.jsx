import KartuKomik from "./KartuKomik";

function DaftarKomik({ daftar, totalData, onHapus }) {
  if (totalData === 0) {
    return <p className="pesan-kosong">Belum ada data komik</p>;
  }

  if (daftar.length === 0) {
    return <p className="pesan-kosong">Komik tidak ditemukan</p>;
  }

  return (
    <div className="daftar">
      {daftar.map((komik) => (
        <KartuKomik
          key={komik.id}
          id={komik.id}
          judul={komik.judul}
          penulis={komik.penulis}
          genre={komik.genre}
          chapter={komik.chapter}
          status={komik.status}
          gambar={komik.gambar}
          onHapus={onHapus}
        />
      ))}
    </div>
  );
}
export default DaftarKomik;