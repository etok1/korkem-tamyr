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
import { useEffect, useState } from 'react';
import { LanguageContext, } from './utils/context';

export default function App() {

  const [language, setLanguage] = useState<'en' | 'kz'>(() => {
    const saved = localStorage.getItem('app-language')
    return (saved === 'en' || saved === 'kz') ? saved : 'en'
  })



useEffect(() => {
localStorage.setItem('app-language', language)
}, [language])

  return (
   <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
    
        <MobileHeader/> 
        <DesktopHeader/> 
    
        <main className='bg-whitishColor '>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team/>} />
              <Route path="/books" element={<Books/>} />
              <Route path="/podcasts" element={<Podcasts/>} />
              <Route path="/podcast/:id" element={<Podcast podcasts={podcasts[language]}/>} />
              <Route path="/history/:categoryId/:articleId" element={<Highlights articles={articles[language]}/>} />
              <Route path="/history/:categoryId" element={<Articles/>} />
              
            </Routes>
        </main>
        <Footer/>
    </LanguageContext.Provider>
   </>
  );
}
