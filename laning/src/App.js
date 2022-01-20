import "./App.css";
import Siswa from "../src/Component/Siswa";
import Matpel from "../src/Component/Matpel";
import Guru from "../src/Component/Guru";
import Buku from "../src/Component/Buku";
import AddBuku from "../src/Component/AddBuku";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UpdateBuku from "../src/Component/UpdateBuku";

function App() {
  return (
    <div className="App">
      {/* <Siswa />
      <Matpel />
      <Guru /> */}
      <Buku />
      {/* <AddBuku /> */}

      <BrowserRouter>
        <Route exact path="/updatebuku/:id" component={UpdateBuku}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
