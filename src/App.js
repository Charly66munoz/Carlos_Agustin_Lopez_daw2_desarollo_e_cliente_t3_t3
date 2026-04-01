import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRouter from "./routes/AppRouter"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return(
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
