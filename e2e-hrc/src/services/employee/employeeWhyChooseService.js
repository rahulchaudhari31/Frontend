import apiClient from '../../config/api';

/**
 * GET /api/employee-why-choose
 * Fetch the active Employee Why Choose section and its cards.
 * Response: { success: true, data: { section: { badgeText, sectionTitle }, cards: [...] } }
 */
export const getEmployeeWhyChoose = async () => {
  const response = await apiClient.get('/api/employee-why-choose');
  // Support both { success, data: { section, cards } } and direct object
  return response.data?.data || response.data;
};
