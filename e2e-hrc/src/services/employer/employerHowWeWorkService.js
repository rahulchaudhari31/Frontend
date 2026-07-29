import apiClient from '../../config/api';

/**
 * Fetch employer how we work steps data from the backend
 * GET /api/employer-how-we-work-steps
 */
export const getEmployerHowWeWorkSteps = async () => {
  try {
    const response = await apiClient.get('/api/employer-how-we-work-steps');
    const data = response.data?.data || response.data;
    return data;
  } catch (error) {
    console.error('Error fetching employer how we work steps data:', error);
    throw error;
  }
};
