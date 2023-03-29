const template = {
    name: '',
    phone: '',
    address: '',
}


export default {
    actions: {
        async loadUserData(ctx){
            const user_data = window.localStorage.user_data
            
            if (!(user_data)){
                window.localStorage.setItem('user_data', JSON.stringify(template))
            }

            ctx.commit("setUserDataFromStorage", JSON.parse(user_data))
        }
    },
    mutations: {
        // setOrderTypePickup(state) {
        //     state.order_settings.is_delivery = false
        //     window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        // },
        // setOrderTypeDelivery(state) {
        //     state.order_settings.is_delivery = true
        //     window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        // },
        updateUserAddress(state, address) {
            state.user_data.address = address
            window.localStorage.setItem('user_data', JSON.stringify(state.user_data))
        },
        updateUserName(state, name){
            state.user_data.name = name
            window.localStorage.setItem('user_data', JSON.stringify(state.user_data))
        },

        updateUserPhone(state, phone) {
            state.user_data.phone = phone
            window.localStorage.setItem('user_data', JSON.stringify(state.user_data))
        },

        setUserDataFromStorage(state, user_data) {
            state.user_data = user_data
        }
    },
    state: {
        user_data: template,
    },
    getters: {
    }
}