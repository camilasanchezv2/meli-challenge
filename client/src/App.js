import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { SearchResults, ItemView } from "./views";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/items/:id" element={<ItemView />} />
          <Route path="/items" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
