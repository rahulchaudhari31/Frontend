import apiClient from '../../config/api';

/**
 * Fetch employer hero section data from the backend
 * GET /api/employer/hero
 */
export const getEmployerHero = async () => {
  try {
    const response = await apiClient.get('/api/employer/hero');
    const data = response.data?.data || response.data;
    return data;
  } catch (error) {
    console.error('Error fetching employer hero data:', error);
    throw error;
  }
};
