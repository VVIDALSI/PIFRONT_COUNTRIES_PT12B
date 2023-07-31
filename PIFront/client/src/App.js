// Commons imports


//Styles
import "./App.css";

//Router-Dom
import { Routes, Route } from "react-router-dom";

//Views
import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Create from "./views/Create/Create";
import About from "./views/About/About";

//React
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}></Route>

          <Route path="/home" element={<Home />}></Route>

          <Route path="/detail/:id" element={<Detail />}></Route>

          <Route path="/create" element={<Create />}></Route>

          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
  );
}

export default App;
