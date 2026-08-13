import apiClient from '../../config/api';

/**
 * Fetch How We Work data (section header & steps) from backend
 * GET /api/workforce-solutions/how-we-work
 */
export const getHowWeWork = async () => {
  try {
    const response = await apiClient.get('/api/workforce-solutions/how-we-work');
    return response.data?.data || response.data;
  } catch (error) {
    console.error('Error fetching how we work data:', error);
    throw error;
  }
};

export default getHowWeWork;
