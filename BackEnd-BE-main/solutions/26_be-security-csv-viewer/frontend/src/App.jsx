import React, { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { FancyTable } from "./FancyTable";

function App() {
  const [data, setData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    //! This is very fragile, and should be handled better
    const opts = { method: "POST", body: formData };
    fetch("http://localhost:3090/convert", opts)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <header>
        <h1>Upload a file for viewing</h1>
        <input type="file" onChange={handleFileUpload} />
      </header>

      <main style={{ padding: "1ch" }}>
        <FancyTable data={data} />
      </main>
    </>
  );
}

export default App;
