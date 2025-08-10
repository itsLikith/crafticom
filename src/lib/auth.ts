import axios from 'axios';

export const logout = async () => {
  try {
    await axios.post('/api/auth/logout');
    // Redirect to home page after logout
    window.location.href = '/';
  } catch (error) {
    console.error('Logout error:', error);
    // Even if the API call fails, redirect to home
    window.location.href = '/';
  }
};

export default logout;
