import apiClient from '../../config/api';

/**
 * GET /api/employee-hero
 * Fetch the active employee hero section.
 * Response: { success: true, data: { badgeText, titleLine1, description, leftTopImage, leftBottomImage, rightImage } }
 */
export const getEmployeeHero = async () => {
  const response = await apiClient.get('/api/employee-hero');
  // Support both { success, data: {...} } and direct object
  return response.data?.data || response.data;
};
