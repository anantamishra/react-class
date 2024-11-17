import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { About, Blogs, Calculator, Contact, Counter, GitHubProfile, GitHubRepos, Home, NewsPortal, Operation, Quiz, QuizGpt, Section, SingleBlog, SingleNews, SumInputs, Translate, VideoPlayer } from './pages';


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
        <Route path="/github-profile" element={<GitHubProfile />} />
        <Route path="/github-repos" element={<GitHubRepos />} />
        <Route path="/quiz-gpt" element={<QuizGpt />} />
        <Route path="/translate" element={<Translate />} />
        <Route path="/section" element={<Section />} />
        <Route path="/useref" element={<Counter />} />
        <Route path="/video-player" element={<VideoPlayer />} />
      </Routes>
      <Footer />
    </>);
}

export default App;
