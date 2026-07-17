import apiClient from '../../config/api';

/**
 * Fetch active trusted by logos from the backend
 * GET /api/trusted-by/logos
 */
export const getTrustedByLogos = async () => {
  try {
    const response = await apiClient.get('/api/trusted-by/logos');

    // Handle different response structures
    const data = response.data?.data || response.data;

    // Ensure we return an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching trusted by logos:', error);
    throw error;
  }
};
