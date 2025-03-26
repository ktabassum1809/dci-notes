import Home from "./components/views/Home";
import Page1 from "./components/views/Page1";
import Page2 from "./components/views/Page2";
import Page3 from "./components/views/Page3";
import { Fragment } from "react";

import { Route, Routes, Link } from "react-router-dom";

let idFromDb = 555555

function App() {
  return (
    <Fragment>
      <nav>
        <Link to={"/"}> Home </Link> <br />
        <Link to={"/page1"}> Page 1 </Link> <br />
        <Link to={"/page2"}> Page 2 </Link> <br />
        <Link to={`/page3/${idFromDb}/john-doe`}> page 3</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        
        <Route path="/page3/:id/:username" element={<Page3 test1="hi" test2="hello" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
