export default {
    actions: {
        async loadCartItems(ctx) {
            const cart_items = window.localStorage.cart_items
            if (!(cart_items)) {
                window.localStorage.setItem('cart_items', JSON.stringify([]))
            }

            ctx.commit("setCartFromStorage", JSON.parse(cart_items))
        }
    },
    mutations: {
        addToCart(state, id) {
            state.cart_items.push({ id: id, amount: 1 })
            window.localStorage.setItem('cart_items', JSON.stringify(state.cart_items))
        },

        removeItem(state, id) {
            state.cart_items.filter(item => item.id === id)[0].amount--

            if (state.cart_items.filter(item => item.id === id)[0].amount <= 0) {

                const index = state.cart_items.findIndex(item => item.id === id);
                if (index !== -1) {
                    state.cart_items.splice(index, 1);
                }
            }
            window.localStorage.setItem('cart_items', JSON.stringify(state.cart_items))
        },
        addItem(state, id) {
            state.cart_items.filter(item => item.id === id)[0].amount++
            window.localStorage.setItem('cart_items', JSON.stringify(state.cart_items))
        },
        clearCart(state) {
            state.cart_items = []
            window.localStorage.setItem('cart_items', JSON.stringify(state.cart_items))
        },
        setCartFromStorage(state, cart) {
            state.cart_items = cart
        }
    },
    state: {
        cart_items: [],
    },
    getters: {
        getCartItems: (state) => {
            return state.cart_items
        },
        getCartItemById: (state) => (id) => {
            return state.cart_items.filter(item => item.id === id)[0]
        },
        getCartPrice: (state, getters) => {
            let cart_price = 0;
            for (const item of state.cart_items) {
                const dish = getters.getDishById(item.id)
                if (dish) {
                    cart_price += dish.price * item.amount
                }
            }
            return cart_price
        },
        isCartEmpty: (state) => {
            return state.cart_items.length > 0
        }
    }
}