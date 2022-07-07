import './App.scss';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
      </main>
  );
}

export default App;
