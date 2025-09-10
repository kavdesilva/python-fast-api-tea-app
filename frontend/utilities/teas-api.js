import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:8000/api/teas'

export async function teaIndex() {
    return sendRequest(BASE_URL)
}
export async function showTea(teaId) {
    return sendRequest(`${BASE_URL}/${teaId}`)
}

export async function createTea(formData) {
    return sendRequest(BASE_URL, "POST", formData)
}

export async function updateTea(teaId, formData) {
    return sendRequest(`${BASE_URL}/${teaId}`, "PUT", formData)
}

export async function deleteTea(teaId) {
    return sendRequest(`${BASE_URL}/${teaId}`, "DELETE")
}
import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:8000/api/teas'

export async function teaIndex() {
    return sendRequest(BASE_URL)
}
export async function showTea(teaId) {
    return sendRequest(`${BASE_URL}/${teaId}`)
}

export async function deleteTea(teaId) {
    return sendRequest(`${BASE_URL}/${teaId}`, "DELETE")
}