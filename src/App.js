import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Rough from './pages/Rough'
import Explore from './pages/Explore';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/route" element={<Rough/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
