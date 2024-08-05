import React, { useState, useEffect } from 'react';
import { getLeads } from '../../utils/api';

const LeadTable = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await getLeads();
        setLeads(response.data);
      } catch (error) {
        // Handle error (e.g., show error message)
      }
    };

    fetchLeads();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td>{lead.company_name}</td>
            <td>{lead.contact_name}</td>
            <td>{lead.email}</td>
            <td>{lead.phone}</td>
            <td>{lead.address}</td>
            <td>{lead.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
