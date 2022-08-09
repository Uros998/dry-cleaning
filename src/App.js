import './App.scss';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import Contactpage from "./pages/contactpage/contactpage";

function App() {
  return (
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/contact" element={<Contactpage/>}/>
        </Routes>
      </main>
  );
}

export default App;
