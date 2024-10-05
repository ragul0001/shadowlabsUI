import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Rough from './pages/Rough'
import Explore from './pages/Explore';
import Particles from './pages/Particles';
import ARexplore from './pages/ARexplore';
import Appexplore from './pages/Appexplore';
import VRexplore from './pages/VRexplore';
import Webexplore from './pages/Webexplore'
import Three from './components/PortfolioPages/Three';
import Arp from './components/PortfolioPages/Arp';
import Vrp from './components/PortfolioPages/Vr';
import Gaming from './components/PortfolioPages/Gaming';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/route" element={<Rough/>}/>
          <Route path="/particle" element={<Particles/>}/>
          <Route path="/app" element={<Appexplore/>}/>
          <Route path="/ar" element={<ARexplore/>}/>
          <Route path="/vr" element={<VRexplore/>}/>
          <Route path="/web" element={<Webexplore/>}/>
          <Route path="/three" element={<Three/>}/>
          <Route path="/arp" element={<Arp/>}/>
          <Route path="/vrp" element={<Vrp/>}/>
          <Route path="/game" element={<Gaming/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
