import apiClient from '../../config/api';

/**
 * Fetch active contact CTA data from the backend
 * GET /api/contact-cta
 */
export const getContactCTA = async () => {
  try {
    const response = await apiClient.get('/api/contact-cta');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching contact CTA:', error);
    throw error;
  }
};
