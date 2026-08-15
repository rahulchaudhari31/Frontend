import apiClient from '../../config/api';

/**
 * Fetch the active Recruitment Partners data from backend.
 * GET /api/recruitment-partners/active
 */
export const getActiveRecruitmentPartner = async () => {
  try {
    const response = await apiClient.get('/api/recruitment-partners/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active recruitment partners data:', error);
    throw error;
  }
};

export default getActiveRecruitmentPartner;
