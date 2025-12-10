import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SejaVoluntario from "./pages/sejaVoluntario/SejaVoluntario";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./global.style.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SejaVoluntario" element={<SejaVoluntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}



/*
const App = () => {
  const [nomes, setNome] = useState (["Alesy", "Luiza", "Igor"]);
  
  return (
    <>
     <ul>
      {nomes.map((item)=>(
        <li>{item}</li>
     ) )}
     </ul>
     </>
  )
}

export default App*/
