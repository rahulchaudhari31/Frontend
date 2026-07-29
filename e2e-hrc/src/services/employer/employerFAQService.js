import apiClient from "../../config/api";

export const getEmployerFAQs = async () => {
  const response = await apiClient.get("/api/employer-faq");
  return response.data;
};
