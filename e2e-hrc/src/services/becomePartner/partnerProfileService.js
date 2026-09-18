import apiClient from '../../config/api';

export const getPartnerProfile = async () => {
  try {
    const response = await apiClient.get('/api/become-partner/partner-profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching partner profile data:', error);
    throw error;
  }
};

export default getPartnerProfile;
