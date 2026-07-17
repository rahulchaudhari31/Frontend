import apiClient from '../../config/api';

/**
 * Fetch footer office locations from the backend
 * GET /api/footer-office-location
 */
export const getFooterOfficeLocation = async () => {
  try {
    const response = await apiClient.get('/api/footer-office-location');

    // Handle different response structures
    // Backend returns: { success: true, data: { title, image, isActive } } (single object)
    const data = response.data?.data || response.data;

    if (!data) return [];

    // Ensure we always return an array
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error('Error fetching footer office locations:', error);
    throw error;
  }
};
