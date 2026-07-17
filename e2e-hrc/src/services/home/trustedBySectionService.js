import apiClient from '../../config/api';

/**
 * Fetch active trusted by section from the backend
 * GET /api/trusted-by
 */
export const getTrustedBySection = async () => {
  try {
    const response = await apiClient.get('/api/trusted-by');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching trusted by section:', error);
    throw error;
  }
};
