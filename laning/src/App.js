import "./App.css";
import Siswa from "./Component/Siswa";
import Matpel from "./Component/Matpel";
import Guru from "./Component/Guru";
import Buku from "./Component/Buku";
import AddBuku from "./Component/AddBuku";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateBuku from "./Component/UpdateBuku";

function App() {
  return (
    <div className="App">
      {/* <Siswa />
      <Matpel />
      <Guru />
      <Buku />
      <AddBuku /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddBuku />} />
          <Route path="siswa" element={<Siswa />} />
          <Route path="buku" element={<Buku />} />
          <Route path="addBuku" element={<AddBuku />} />
          <Route path="editBuku/:id" element={<UpdateBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
