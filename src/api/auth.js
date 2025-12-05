import api from "./client";

export const loginUser = async (data) => {
  const response = await api.post("/users/login", data);
  return response.data;
};

export const registerCustomer = async (data) => {
  const res = await api.post("/users/register/customer", data);
  return res.data;
};

export const registerSeller = async (data) => {
  const res = await api.post("/users/register/seller", data);
  return res.data;
};
