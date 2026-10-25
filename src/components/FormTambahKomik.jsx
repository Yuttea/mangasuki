import { useState } from "react";

const kosong = {
  judul: "",
  penulis: "",
  genre: "",
  chapter: "",
  status: "Ongoing",
  gambar: "",
};

function FormTambahKomik({ onTambah }) {
  const [form, setForm] = useState(kosong);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.judul.trim() || !form.penulis.trim()) return;
    onTambah(form);
    setForm(kosong);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="judul" placeholder="Judul komik" value={form.judul} onChange={handleChange} />
      <input name="penulis" placeholder="Penulis" value={form.penulis} onChange={handleChange} />
      <input name="genre" placeholder="Genre (Action, Fantasy...)" value={form.genre} onChange={handleChange} />
      <input name="chapter" type="number" placeholder="Chapter terakhir" value={form.chapter} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Ongoing">Ongoing</option>
        <option value="Tamat">Tamat</option>
      </select>
      <input name="gambar" placeholder="Link gambar sampul (opsional)" value={form.gambar} onChange={handleChange} />
      <button type="submit">Tambah</button>
    </form>
  );
}
export default FormTambahKomik;