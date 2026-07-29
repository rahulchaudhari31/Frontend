import apiClient from "../../config/api";

export const getEmployerCTA = async () => {
  const response = await apiClient.get("/api/employer-cta");
  return response.data;
};
