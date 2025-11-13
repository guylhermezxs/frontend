import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
