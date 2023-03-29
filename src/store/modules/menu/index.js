export default {
    actions: {
        async getMenu(ctx) {
            const url = `${this.getters.getAPIUrl}/getMenuByLangCode/?lang_code=${this.getters.getLanguageCode}`

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const answer = await response.json()
            if (!(answer.ok)) {
                throw new Error(answer.error)
            }

            const menu = answer.data.menu

            ctx.commit("updateMenu", menu)
        },
    },
    mutations: {
        updateMenu(state, menu) {
            state.dishes = menu.dishes
            state.categories = menu.categories
        },
    },
    state: {
        dishes: [],
        categories: [],
    },
    getters: {
        getCategories: (state) => {
            const categories = []
            for (const category of state.categories) {
                if (state.dishes.filter(dish => dish.category_id === category.id).length > 0){
                    categories.push(category)
                }
            }
            return categories
        },
        getDishesByCategoryId: (state) => (category_id) => {
            return state.dishes.filter(dish => dish.category_id === category_id)
        },
        getDishById: (state) => (id) => {
            return state.dishes.filter(dish => dish.id === id)[0]
        },
    }
}
