import apiClient from '../../config/api';

export const getEmployeeFAQ = async () => {
  try {
    const response = await apiClient.get('/api/employee/faq');
    return response.data;
  } catch (error) {
    console.error('Error fetching Employee FAQ:', error);
    throw error;
  }
};

export const getEmployeeCTA = async () => {
  try {
    const response = await apiClient.get('/api/employee/cta');
    return response.data;
  } catch (error) {
    console.error('Error fetching Employee CTA:', error);
    throw error;
  }
};
