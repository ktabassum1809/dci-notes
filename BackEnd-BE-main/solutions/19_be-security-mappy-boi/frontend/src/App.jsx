import { useState } from "react";
import Map from "./Map.jsx";
import "leaflet/dist/leaflet.css";
import "./main.css";
import { useEffect } from "react";

console.log("BACKEND RUNNING AT " + import.meta.env.VITE_BACKEND);

export default function App() {
  const [position, setPosition] = useState(null);
  const [desc, setDesc] = useState("");
  const [reports, setReports] = useState([]); // {lat, lng, desc}

  // Fetch existing reports from the backend
  useEffect(() => {
    fetch("//localhost:9210/reports")
      .then((res) => res.json())
      .then(setReports)
      .catch(console.error);
  }, []);

  function report() {
    if (!position) return alert("Please select a location");

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lat: position.lat,
        lng: position.lng,
        desc,
      }),
    };

    fetch("//localhost:9210/reports", opts)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert("Report sent");
          setReports([
            ...reports,
            { lat: position.lat, lng: position.lng, desc },
          ]);
          setPosition(null);
          setDesc("");
        } else {
          alert("Error: " + res.error);
        }
      })
      .catch(console.error);
  }

  return (
    <div className="form">
      <Map reports={reports} position={position} setPosition={setPosition} />
      <div className="form-fields">
        <h3>Report abandoned bicycle</h3>
        {position && (
          <>
            GPS: {position.lat}, {position.lng}
          </>
        )}
        <br />
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Short description"
        >
          {desc}
        </textarea>
        <button onClick={report}>Send report</button>
      </div>
    </div>
  );
}
