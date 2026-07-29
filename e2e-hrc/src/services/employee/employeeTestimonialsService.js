import apiClient from '../../config/api';

/**
 * Fetch employee testimonials from the backend
 * GET /api/employee/testimonials
 */
export const getEmployeeTestimonials = async () => {
  try {
    const response = await apiClient.get('/api/employee/testimonials');
    return response.data;
  } catch (error) {
    console.error('Error fetching employee testimonials:', error);
    throw error;
  }
};
