import apiClient from '../../config/api';

/**
 * Fetch footer contact information from the backend
 * GET /api/footer-contact
 */
export const getFooterContact = async () => {
  try {
    const response = await apiClient.get('/api/footer-contact');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching footer contact:', error);
    throw error;
  }
};
