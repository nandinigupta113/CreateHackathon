import "./App.css";
import Details from '../src/Pages/UserSide/DetailsPage/Details.js';
import ListPage from "./Pages/UserSide/ListPage/ListPage";
import CreateChallenge from "./Pages/AdminSide/CreateChallenge/CreateChallenge.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/Details" element={<Details/>} />
          <Route path="/CreateChallenge" element={<CreateChallenge/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
