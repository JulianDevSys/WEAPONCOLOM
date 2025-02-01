import Page from "./PagePrincipal/Page"
import PageLoginSession from "./LoginSession/PageLoginSession";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/LoginSession" element={<PageLoginSession />} />
      </Routes>
    </>
  )
}

export default App
