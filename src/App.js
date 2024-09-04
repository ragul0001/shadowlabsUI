import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Rough from './pages/Rough'
import Explore from './pages/Explore';
import Particles from './pages/Particles';
import ARexplore from './pages/ARexplore';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/route" element={<Rough/>}/>
          <Route path="/particle" element={<Particles/>}/>
          <Route path="/ar" element={<ARexplore/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
