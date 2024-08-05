// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

// const data = [
//   { name: 'Jan', leads: 400, opportunities: 240, inventory: 240 },
//   { name: 'Feb', leads: 300, opportunities: 139, inventory: 221 },
//   { name: 'Mar', leads: 200, opportunities: 180, inventory: 229 },
//   { name: 'Apr', leads: 278, opportunities: 238, inventory: 279 },
//   { name: 'May', leads: 189, opportunities: 269, inventory: 282 },
//   { name: 'Jun', leads: 239, opportunities: 349, inventory: 321 },
// ];

// const DashboardCharts = () => {
//   return (
//     <div>
//       <h2>Dashboard Charts</h2>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         <LineChart width={350} height={250} data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="leads" stroke="#8884d8" />
//           <Line type="monotone" dataKey="opportunities" stroke="#82ca9d" />
//         </LineChart>
//         <BarChart width={250} height={150} data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="inventory" fill="#8884d8" />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default DashboardCharts;


// ================================================================================================================

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const DashboardCharts = ({ leads, opportunities, inventory }) => {
  return (
    <div>
        <br/><br/>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <LineChart width={300} height={200} data={leads}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
        <LineChart width={300} height={200} data={opportunities}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>
        <BarChart width={300} height={200} data={inventory}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default DashboardCharts;