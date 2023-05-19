import "./App.css";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MapView from "./components/MapView/MapView";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ecofriendly-locations" element={<MapView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
