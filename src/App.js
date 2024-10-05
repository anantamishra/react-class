import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { About, Calculator, Contact, Home, NewsPortal, Operation, SumInputs } from './pages';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-effect" element={<SumInputs />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/news-portal" element={<NewsPortal />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
