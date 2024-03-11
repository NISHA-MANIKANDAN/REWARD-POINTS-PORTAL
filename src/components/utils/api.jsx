const defaultApiHost = 'http://localhost:5000';


const apiHost = process.env.REACT_APP_API_HOST || defaultApiHost;

export default apiHost;
