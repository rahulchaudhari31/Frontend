import apiClient from '../../config/api';

export const getTestimonials = async () => {
  try {
    const response = await apiClient.get('/api/testimonials');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};
