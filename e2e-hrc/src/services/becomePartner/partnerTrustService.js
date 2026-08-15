import apiClient from '../../config/api';

export const getActivePartnerTrust = async () => {
  try {
    const response = await apiClient.get('/api/partner-trust/active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active partner trust data:', error);
    throw error;
  }
};

export default getActivePartnerTrust;
