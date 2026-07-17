import apiClient from '../../config/api';

/**
 * Fetch footer company information from the backend
 * GET /api/footer-company
 */
export const getFooterCompany = async () => {
  try {
    const response = await apiClient.get('/api/footer-company');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching footer company:', error);
    throw error;
  }
};
