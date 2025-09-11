import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:8000/auth'

export async function signUp(userData) {
  return sendRequest(`${BASE_URL}/register`, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
