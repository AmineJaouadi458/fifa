import "./App.css";
import Fifabody from "./components/fifabody/Fifabody";
import { data } from "./components/playerstats/Playertstats";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {data.map((elt) => (
        <Fifabody key={elt.id} {...elt} />
      ))}
    </div>
  );
}

export default App;
