import apiClient from '../../config/api';

/**
 * Fetch workforce solutions from the backend
 * GET /api/workforce-solutions
 */
export const getWorkforceSolutions = async () => {
  try {
    const response = await apiClient.get('/api/workforce-solutions');
    return response.data?.data || response.data;
  } catch (error) {
    console.error('Error fetching workforce solutions:', error);
    throw error;
  }
};
