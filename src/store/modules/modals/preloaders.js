export default {
    mutations: {
        enableMainPreloader(state){
            state.main_preloader = true
        },
        disableMainPreloader(state){
            state.main_preloader = false
        },
    },
    state: {
        main_preloader: false,
    },
    getters:{
        isMainPreloaderActive: (state) => {
            return state.main_preloader
        } 
    }
}