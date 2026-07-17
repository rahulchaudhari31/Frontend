import apiClient from '../../config/api';

/**
 * Fetch footer navigation links from the backend
 * GET /api/footer-navigation
 */
export const getFooterNavigation = async () => {
  try {
    const response = await apiClient.get('/api/footer-navigation');

    // Handle different response structures
    // Backend returns: { success: true, data: { title, menuItems: [...] } }
    const data = response.data?.data || response.data;

    // The navigation document contains menuItems array; return that
    if (data && Array.isArray(data.menuItems)) {
      return data.menuItems;
    }

    // Fallback: if data itself is already an array, return it
    if (Array.isArray(data)) {
      return data;
    }

    return [];
  } catch (error) {
    console.error('Error fetching footer navigation:', error);
    throw error;
  }
};
