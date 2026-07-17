import apiClient from '../../config/api';

/**
 * Fetch home hero section data from the backend
 * GET /api/hero/home
 */
export const getHomeHero = async () => {
  try {
    const response = await apiClient.get('/api/hero/home');
    
    // Handle different response structures
    const data = response.data?.data || response.data;
    
    return data;
  } catch (error) {
    console.error('Error fetching home hero data:', error);
    throw error;
  }
};
