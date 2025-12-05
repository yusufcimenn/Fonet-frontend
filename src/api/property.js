import api from "./client";

export const listProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};

export const getPropertyById = async (id) => {
  const response = await api.get(`/properties/${id}`);
  return response.data;
};

export const createProperty = async (data) => {
  const response = await api.post("/properties", data);
  return response.data;
};

export const searchProperties = async (filters) => {
  const params = new URLSearchParams();

  Object.keys(filters).forEach(key => {
    if (filters[key] !== "" && filters[key] !== null && filters[key] !== undefined) {
      params.append(key, filters[key]);
    }
  });

  const response = await api.get(`/properties/search?${params.toString()}`);
  return response.data;
};
