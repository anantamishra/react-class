import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { About, Blogs, Calculator, Contact, Home, NewsPortal, Operation, Quiz, SingleBlog, SingleNews, SumInputs } from './pages';


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
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
