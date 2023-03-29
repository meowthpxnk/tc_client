const template = {
    is_delivery: true,
    comment: '',
    delivery_time: 'DEFAULT',
}

export default {
    actions: {
        async loadOrderSettings(ctx){
            const order_settings = window.localStorage.order_settings
            
            if (!(order_settings)){
                window.localStorage.setItem('order_settings', JSON.stringify(template))
            }

            ctx.commit("setOrderSettingsFromStorage", JSON.parse(order_settings))
        }
    },
    mutations: {
        setOrderTypePickup(state) {
            state.order_settings.is_delivery = false
            window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        },
        setOrderTypeDelivery(state) {
            state.order_settings.is_delivery = true
            window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        },
        
        updateDeliveryTime(state, time) {
            state.order_settings.delivery_time = time
            window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        },

        updateOrderComment(state, comment) {
            state.order_settings.comment = comment
            window.localStorage.setItem('order_settings', JSON.stringify(state.order_settings))
        },

        setOrderSettingsFromStorage(state, order_settings) {
            state.order_settings = order_settings
        }
    },
    state: {
        order_settings: template,
    },
    getters: {
        isDeliveryType: (state) => {
            return state.order_settings.is_delivery
        },
        getComment: (state) => {
            return state.order_settings.comment
        }
    }
}