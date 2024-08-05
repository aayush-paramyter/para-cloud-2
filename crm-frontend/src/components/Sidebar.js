import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Para CRM</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/leads">Leads</Link></li>
          <li><Link to="/opportunities">Opportunities</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/quotes">Quotes</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/emails">Emails</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
