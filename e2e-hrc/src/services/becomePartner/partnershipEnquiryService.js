import apiClient from '../../config/api';

/**
 * Submit a new Partnership Enquiry
 * POST /api/partnership-enquiries
 * @param {Object} data - { name, email, countryCode, contactNumber, message }
 */
export const submitPartnershipEnquiry = async (data) => {
  try {
    const response = await apiClient.post('/api/partnership-enquiries', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting partnership enquiry:', error);
    throw error;
  }
};

export default submitPartnershipEnquiry;
