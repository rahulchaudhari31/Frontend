import apiClient from '../../config/api';

/**
 * Fetch Workforce Solution FAQ data from backend
 * GET /api/workforce-solutions/faq
 */
export const getWorkforceFAQ = async () => {
  try {
    const response = await apiClient.get('/api/workforce-solutions/faq');
    return response.data;
  } catch (error) {
    console.error('Error fetching workforce FAQ data:', error);
    throw error;
  }
};

export default getWorkforceFAQ;
