import sendRequest from "./send-request";
const BASE_URL = 'http://localhost:8000/api/teas'

export async function teaIndex() {
    return sendRequest(BASE_URL)
}