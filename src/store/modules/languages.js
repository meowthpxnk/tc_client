import localisation from "@/localisation"

export default {
    actions: {
        async loadLanguageCode(ctx) {
            const language_code = window.localStorage.language_code
            if (!(language_code)) {
                window.localStorage.setItem('language_code', "EN")
            }

            ctx.commit("changeActiveLanguageCode", language_code)
        }
    },
    mutations: {
        changeActiveLanguageCode(state, language_code) {
            state.active_language_code = language_code
            switch (language_code) {
                case 'RU':
                    state.active_language_code = language_code
                    state.dictionary = localisation.RU
                    window.localStorage.setItem('language_code', "RU")
                    break;
                case 'EN':
                    state.active_language_code = language_code
                    state.dictionary = localisation.EN
                    window.localStorage.setItem('language_code', "EN")
                    break;
                case 'TR':
                    state.active_language_code = language_code
                    state.dictionary = localisation.TR
                    window.localStorage.setItem('language_code', "TR")
                    break;
                default:
                    state.active_language_code = 'EN'
                    state.dictionary = localisation.EN
                    window.localStorage.setItem('language_code', "EN")
                    break;
            }
        },
    },
    state: {
        active_language_code: "EN",
        dictionary: localisation.EN,
    },
    getters: {
        getLanguageCode: (state) => {
            return state.active_language_code
        },
        getStringFromKey: (state) => (key) => {
            const result = state.dictionary[key]
            if (result) {
                return result
            }
            return localisation.EN[key]
        }
    }
}