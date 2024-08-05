// import React from 'react';
// import DashboardCharts from '../components/charts/DashboardCharts';

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <DashboardCharts />
//     </div>
//   );
// };

// export default Dashboard;

// ==============================================================================================================

import React, { useState, useEffect } from 'react';
import axios from '../utils/api';
import DashboardCharts from '../components/charts/DashboardCharts';

const Dashboard = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [opportunitiesData, setOpportunitiesData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leadsResponse, opportunitiesResponse, inventoryResponse] = await Promise.all([
          axios.get('/dashboard/leads'),
          axios.get('/dashboard/opportunities'),
          axios.get('/dashboard/inventory'),
        ]);

        setLeadsData(leadsResponse.data);
        setOpportunitiesData(opportunitiesResponse.data);
        setInventoryData(inventoryResponse.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardCharts
        leads={leadsData}
        opportunities={opportunitiesData}
        inventory={inventoryData}
      />
    </div>
  );
};

export default Dashboard;