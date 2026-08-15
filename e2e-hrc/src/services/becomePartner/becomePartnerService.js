import apiClient from '../../config/api';

/**
 * Fetch the active Become a Partner hero data from backend.
 * GET /api/recruitment-partner/active
 */
export const getActiveRecruitmentPartner = async () => {
  try {
    const response = await apiClient.get('/api/recruitment-partner/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active recruitment partner data:', error);
    throw error;
  }
};

export default getActiveRecruitmentPartner;
