import React from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';
import DownloadSection from './Components/DownloadSection';
import Features from './Components/Features';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
