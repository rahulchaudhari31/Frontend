import apiClient from '../../config/api';

/**
 * Fetch Workforce Solution Employer Hero data from backend
 * GET /api/workforce-solution/employer-hero
 */
export const getWorkforceHero = async () => {
  try {
    const response = await apiClient.get('/api/workforce-solution/employer-hero');
    return response.data;
  } catch (error) {
    console.error('Error fetching workforce hero data:', error);
    throw error;
  }
};

export default getWorkforceHero;
