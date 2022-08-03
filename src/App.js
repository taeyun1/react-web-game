import "./App.css";
import BaseBall from "./숫자야구/BaseBall";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import GuGuDan from "./구구단/GuGuDan";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="gugudan" element={<GuGuDan />} />
        <Route path="baseball" element={<BaseBall />} />
      </Routes>
    </>
  );
}

export default App;
