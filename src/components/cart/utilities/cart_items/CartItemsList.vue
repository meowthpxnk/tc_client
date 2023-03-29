<template>
    <div class="cart-dishes">
        <div class="dash" />
        <ul>
            <li v-for="cart_item in $store.getters.getCartItems" :key="cart_item.id" @click="goToDish(cart_item.id)"
                class="clickable">
                <single-cart-item :id="cart_item.id"/>
            </li>
        </ul>
    </div>
</template>

<script>
import SingleCartItem from './SingleCartItem.vue';

export default {
    methods: {
        goToDish(id) {
            console.log(id)
            this.$router.push({ name: 'dish', params: { id: id } })
        }
    },
    components: {
        SingleCartItem
    }
}
</script>