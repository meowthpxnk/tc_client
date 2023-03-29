import preloaders from "./preloaders.js"

export default {
    modules: {
        preloaders,
    },
    mutations: {
        enableLanguageModal(state){
            state.modals.language = true
        },
        disableLanguageModal(state){
            state.modals.language = false
        },
    },
    state: {
        modals: {
            language: false,
        }
    },
    getters:{
        isLanguageModalActive: (state) => {
            return state.modals.language
        } 
    }
}