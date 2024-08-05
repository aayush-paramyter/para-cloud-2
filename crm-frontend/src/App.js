import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import Opportunities from './pages/Opportunities';
import Accounts from './pages/Accounts';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Quotes from './pages/Quotes';
import Tasks from './pages/Tasks';
import Inventory from './pages/Inventory';
import Emails from './pages/Emails';
import Reports from './pages/Reports';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
        <Footer />
      </div>
    </div>
    );
  };

export default App;
