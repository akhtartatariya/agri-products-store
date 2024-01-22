import "./App.css";
import Sample from "./components/Sample";
import { auth } from "./firebase/config";
function App() {
  console.log(auth);
  return (
    <div>
      <h1>welcome to the agriculture</h1>
      <Sample/>
    </div>
  );
}

export default App;