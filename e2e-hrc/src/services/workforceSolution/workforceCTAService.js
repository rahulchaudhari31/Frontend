import apiClient from '../../config/api';

/**
 * Fetch Workforce Solution CTA data from backend
 * GET /api/workforce-solutions/cta
 */
export const getWorkforceCTA = async () => {
  try {
    const response = await apiClient.get('/api/workforce-solutions/cta');
    return response.data;
  } catch (error) {
    console.error('Error fetching workforce CTA data:', error);
    throw error;
  }
};

export default getWorkforceCTA;
