import apiClient from '../../config/api';

/**
 * Fetch the active Contact Us section from the backend
 * GET /api/connect-section
 * 
 * Expected response structure:
 * {
 *   "success": true,
 *   "data": {
 *     "title": "Connect With",
 *     "highlightedText": "E2E HRC",
 *     "backgroundImage": "/uploads/contact-us/banner.jpg",
 *     "isActive": true
 *   }
 * }
 */
export const getContactUsSection = async () => {
  try {
    const response = await apiClient.get('/api/connect-section');

    // Handle different response structures
    const data = response.data?.data || response.data;

    return data;
  } catch (error) {
    console.error('Error fetching Contact Us section:', error);
    throw error;
  }
};

/**
 * Submit a contact enquiry
 * POST /api/contact/enquiries
 * 
 * @param {FormData} formData - Form data with enquiry details and optional file attachment
 * @returns {Promise} Response with success status, message, and data
 * 
 * Expected response structure:
 * {
 *   "success": true,
 *   "message": "Contact enquiry submitted successfully.",
 *   "data": {
 *     "_id": "507f1f77bcf86cd799439011",
 *     "firstName": "John",
 *     "lastName": "Doe",
 *     "company": "ABC Company",
 *     "email": "john@company.com",
 *     "iam": "employer",
 *     "subject": "Executive Search Inquiry",
 *     "message": "How can we help your business grow?",
 *     "attachment": { ... },
 *     "status": "new",
 *     "createdAt": "2026-08-21T10:30:45.123Z",
 *     "updatedAt": "2026-08-21T10:30:45.123Z"
 *   }
 * }
 */
export const submitContactEnquiry = async (formData) => {
  try {
    // Create a new axios instance without JSON content-type header
    // This allows the browser to set the correct multipart/form-data boundary
    const response = await apiClient.post('/api/contact/enquiries', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error submitting contact enquiry:', error);
    throw error;
  }
};
