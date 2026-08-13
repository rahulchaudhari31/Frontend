import apiClient from '../../config/api';

/**
 * Fetch all active testimonials for the Workforce Solution page.
 */
export const getTestimonials = async () => {
  const response = await apiClient.get('/api/workforce-solutions/testimonials');
  return response.data;
};
