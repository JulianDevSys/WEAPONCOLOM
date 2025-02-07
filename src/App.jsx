import Page from "./PagePrincipal/Page"
import PageLoginSession from "./LoginSession/PageLoginSession";
import { Routes, Route, Link } from 'react-router-dom';
import PerfilUser from "./LoginSession/Perfil/PerfilUser";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/LoginSession" element={<PageLoginSession />} />
        <Route path="/Perfil" element={<PerfilUser/>} />
      </Routes>
    </>
  )
}

export default App
