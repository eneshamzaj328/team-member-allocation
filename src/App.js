import React from 'react';
import { DataProvider } from './context/TmaContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Layout/Header';
import Employees from './components/Employees';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Header />

        <main className="my-5 pb-3">
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/team-members" element={<GroupedTeamMembers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;