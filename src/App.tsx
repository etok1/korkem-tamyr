import './App.css'
import { Routes, Route } from 'react-router-dom';
import DesktopHeader from './components/Header/DesktopHeader';
import Home from './pages/Home';
import Team from './pages/Team';
import MobileHeader from './components/Header/MobileHeader';
import Books from './pages/Books';
import Articles from './pages/Articles';
import Highlights from './pages/Highlight';
import { articles, podcasts } from './utils/data';
import Footer from './components/Footer';
import Podcasts from './pages/Podcasts';
import Podcast from './pages/Podcast';

export default function App() {


  return (
   <>
   
       <MobileHeader/> 
       <DesktopHeader/> 
   
    <main>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/team" element={<Team/>} />
           <Route path="/books" element={<Books/>} />
           <Route path="/podcasts" element={<Podcasts/>} />
           <Route path="/podcast/:id" element={<Podcast podcasts={podcasts}/>} />
           <Route path="/history/:categoryId/:articleId" element={<Highlights articles={articles}/>} />
           <Route path="/history/:categoryId" element={<Articles/>} />
           
        </Routes>
    </main>
    <Footer/>
   </>
  );
}
