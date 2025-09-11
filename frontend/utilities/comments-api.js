import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:8000/api'

export async function showComment(commentId) {
    return sendRequest(`${BASE_URL}/comments/${commentId}`)
}

export async function getTeaComments(teaId) {
    return sendRequest(`${BASE_URL}/teas/${teaId}/comments`)
}

export async function getUserComments(userId) {
    return sendRequest(`${BASE_URL}/auth/${userId}/comments`)
}

export async function createComment(teaId, formData) {
    return sendRequest(`${BASE_URL}/teas/${teaId}/comments`, "POST", formData)
}

export async function updateComment(commentId, formData) {
    return sendRequest(`${BASE_URL}/comments/${commentId}`, "PUT", formData)
}

export async function deleteComment(commentId) {
    return sendRequest(`${BASE_URL}/comments/${commentId}`, "DELETE")
}