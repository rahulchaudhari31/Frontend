import apiClient from '../../config/api';

/**
 * GET /api/employee-journey
 * Fetch the active employee journey section and its cards.
 * Response: { success: true, data: { section: { badgeText, sectionTitle }, cards: [{ title, order }] } }
 */
export const getEmployeeJourney = async () => {
  const response = await apiClient.get('/api/employee-journey');
  // Support both { success, data: { section, cards } } and direct object
  return response.data?.data || response.data;
};
