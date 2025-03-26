import "./App.css";
import Navigation from "./components/Navigation";
import Ozzy from "./components/Ozzy";
import Tony from "./components/Tony";
import Geezer from "./components/Geezer";
import Bill from "./components/Bill";
import Band from "./components/Band";
import NotFound from "./components/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/vocals" element={<Ozzy />} />
            <Route exact path="/guitar" element={<Tony />} />
            <Route exact path="/bass" element={<Geezer />} />
            <Route exact path="/drums" element={<Bill />} />
            <Route exact path="/" element={<Band />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
