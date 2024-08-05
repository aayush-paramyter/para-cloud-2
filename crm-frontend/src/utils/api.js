import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the base URL to your FastAPI backend
});

// Leads API endpoints
export const getLeads = () => api.get('/leads/');
export const createLead = (lead) => api.post('/leads/', lead);

// Opportunities API endpoints
export const getOpportunities = () => api.get('/opportunities/');
export const createOpportunity = (opportunity) => api.post('/opportunities/', opportunity);

// Accounts API endpoints
export const getAccounts = () => api.get('/accounts/');
export const createAccount = (account) => api.post('/accounts/', account);

// Contacts API endpoints
export const getContacts = () => api.get('/contacts/');
export const createContact = (contact) => api.post('/contacts/', contact);

// Products API endpoints
export const getProducts = () => api.get('/products/');
export const createProduct = (product) => api.post('/products/', product);

// Quotes API endpoints
export const getQuotes = () => api.get('/quotes/');
export const createQuote = (quote) => api.post('/quotes/', quote);

// Tasks API endpoints
export const getTasks = () => api.get('/tasks/');
export const createTask = (task) => api.post('/tasks/', task);

// Export the Axios instance for use in other files
export default api;
