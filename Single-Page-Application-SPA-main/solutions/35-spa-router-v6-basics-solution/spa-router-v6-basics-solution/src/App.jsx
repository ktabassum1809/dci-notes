import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Parent from "./components/Parent";
import Home from "./components/Home";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path="one" element={<ChildOne />} />
          <Route path="two" element={<ChildTwo />} />
          <Route path="three" element={<ChildThree />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
