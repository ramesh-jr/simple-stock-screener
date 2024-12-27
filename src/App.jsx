import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

function App() {
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      <h1>Simple Stock Screener</h1>
      {showChart && (
        <Line
          datasetIdKey="id"
          data={{
            labels: ["03:00 pm", "04:00 pm", "05:00 pm", "06:00 pm", "07:00 pm", "08:00 pm"],
            datasets: [
              {
                id: 1,
                label: "MSFT",
                data: [438.33, 437.98, 439.11, 438.39, 439.01, 439.79],
              },
            ],
          }}
        />
      )}
      <div className="card">
        <button
          onClick={() => {
            setShowChart(!showChart);
          }}
        >
          Show Chart
        </button>
      </div>
    </>
  );
}

export default App;
