import apiClient from '../../config/api';

/**
 * Fetch how we work section data from the backend
 * GET /api/how-we-work
 */
export const getHowWeWork = async () => {
  try {
    const response = await apiClient.get('/api/how-we-work');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching how we work data:', error);
    throw error;
  }
};
