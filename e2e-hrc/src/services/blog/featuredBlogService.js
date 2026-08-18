import apiClient from '../../config/api';

/**
 * Fetch the active Featured Blog section
 * GET /api/featured-blog/active
 */
export const getActiveFeaturedBlog = async () => {
  try {
    const response = await apiClient.get('/api/featured-blog/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active Featured Blog:', error);
    throw error;
  }
};
