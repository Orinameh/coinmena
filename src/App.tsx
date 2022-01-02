import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Trending from "./pages/Trending";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Trending />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
