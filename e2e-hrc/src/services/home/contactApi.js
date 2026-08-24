import apiClient from "../../config/api";

const getResponseData = (response) => response.data?.data ?? response.data;

export const createEmployeeContact = async (formData) => {
  try {
    const response = await apiClient.post("/api/public/employee", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return getResponseData(response);
  } catch (error) {
    console.log(error);
  }
};

export const createEmployerContact = async (formData) => {
  const response = await apiClient.post("/api/public/employer", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return getResponseData(response);
};
