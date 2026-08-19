import apiClient from '../../config/api';

/**
 * Fetch all active blogs from the backend
 * GET /api/blogs
 */
export const getActiveBlogs = async () => {
  try {
    const response = await apiClient.get('/api/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching active blogs:', error);
    throw error;
  }
};

/**
 * Fetch a single blog by slug
 * GET /api/blogs/:slug
 * @param {string} slug - Blog slug
 * @returns {Promise} Blog data
 */
export const getBlogBySlug = async (slug) => {
  try {
    const response = await apiClient.get(`/api/blogs/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};
