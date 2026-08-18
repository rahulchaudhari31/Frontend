import apiClient from '../../config/api';

/**
 * Fetch the active Blog Hero section
 * GET /api/blog-hero/active
 */
export const getActiveBlogHero = async () => {
  try {
    const response = await apiClient.get('/api/blog-hero/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active Blog Hero:', error);
    throw error;
  }
};
