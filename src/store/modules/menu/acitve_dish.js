const template = {
    title: '',
    price: 0,
    description: '',
    portion: '',
    ingredients: '',
}

export default {
    actions: {
        async getDishById(ctx, id) {
            const url = `${this.getters.getAPIUrl}/getDishByIdWithLangCode/${id}/?lang_code=${this.getters.getLanguageCode}`

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

            const dish = answer.data.dish

            ctx.commit("updateActiveDish", dish)
        }
    },
    mutations: {
        updateActiveDish(state, dish) {
            state.active_dish = dish
        },
        deleteActiveDish(state) {
            state.active_dish = template
        }
    },
    state: {
        active_dish: template
    },
    getters: {
        getActiveDish: (state) => {
            return state.active_dish
        }
    }
}