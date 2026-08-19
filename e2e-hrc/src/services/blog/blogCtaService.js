import apiClient from '../../config/api';

/**
 * Fetch active Blog CTA (Public API)
 * GET /api/blog-cta/active
 * @returns {Promise} Active blog CTA data
 */
export const getActiveBlogCta = async () => {
  try {
    const response = await apiClient.get('/api/blog-cta/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active blog CTA:', error);
    throw error;
  }
};
