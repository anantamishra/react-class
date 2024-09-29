import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { About, Contact, Home, SumInputs } from './pages';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-effect" element={<SumInputs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
