import { API_URL } from "@/settings"

export default {
    getters: {
        getAPIUrl: () => {
            return API_URL
        },
    },
}