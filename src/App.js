import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MapView from "./components/MapView/MapView";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ecofriendly-locations" element={<MapView />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
