import "./App.css";
import BaseBall from "./3.숫자야구/BaseBall";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import GuGuDan from "./1.구구단/GuGuDan";
import WordRelay from "./2.끝말잇기/WordRelay";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" />
        <Route path="gugudan" element={<GuGuDan />} />
        <Route path="baseball" element={<BaseBall />} />
        <Route path="wordrelay" element={<WordRelay />} />
      </Routes>
    </>
  );
}

export default App;
