import { useState } from "react";
import Header from "./components/Header";
import RingkasanKomik from "./components/RingkasanKomik";
import FormTambahKomik from "./components/FormTambahKomik";
import CariKomik from "./components/CariKomik";
import DaftarKomik from "./components/DaftarKomik";
import "./App.css";

function App() {
  const [komik, setKomik] = useState([
  { id: 1, judul: "Solo Leveling", penulis: "Chugong", genre: "Action", chapter: 179, status: "Tamat", gambar: "/solo-leveling.jpg" },
  { id: 2, judul: "Pick Me Up", penulis: "Hermod", genre: "Fantasy", chapter: 150, status: "Ongoing", gambar: "/pick-me-up.jpg" },
  { id: 3, judul: "The Beginning After the End", penulis: "TurtleMe", genre: "Fantasy", chapter: 200, status: "Ongoing", gambar: "/tbate.jpg" },
  { id: 4, judul: "Lookism", penulis: "Park Tae-joon", genre: "Drama", chapter: 520, status: "Ongoing", gambar: "/lookism.jpg" },
]);
  const [kataKunci, setKataKunci] = useState("");

  const tambahKomik = (dataBaru) => {
    setKomik([
      ...komik,
      { ...dataBaru, chapter: Number(dataBaru.chapter) || 0, id: Date.now() },
    ]);
  };

  const hapusKomik = (id) => {
    setKomik(komik.filter((k) => k.id !== id));
  };

  const hasilCari = komik.filter((k) =>
    k.judul.toLowerCase().includes(kataKunci.toLowerCase())
  );

  const jumlahOngoing = komik.filter((k) => k.status === "Ongoing").length;
  const jumlahTamat = komik.length - jumlahOngoing;

  return (
    <div className="container">
      <Header judul="MangaSuki" subjudul="Daftar manhwa & komik favoritmu" />
      <RingkasanKomik jumlah={komik.length} ongoing={jumlahOngoing} tamat={jumlahTamat} />
      <FormTambahKomik onTambah={tambahKomik} />
      <CariKomik nilai={kataKunci} onUbah={setKataKunci} />
      <DaftarKomik daftar={hasilCari} totalData={komik.length} onHapus={hapusKomik} />
    </div>
  );
}

export default App;