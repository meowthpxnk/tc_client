<template>
    <div class="cart-block cart-items">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('cart_your_orter_title') }}</span>
            <button class="clear-cart" @click="$store.commit('clearCart')">
                <img src="@/assets/icons/trash.png" alt="">
                <span>{{ $store.getters.getStringFromKey('clear_cart_btn') }}</span>
            </button>
        </div>
        <cart-items-list />
        <div class="amount">
            <span class="text">{{ $store.getters.getStringFromKey('amount_msg') }}:</span>
            <span class="money">{{ $store.getters.getCartPrice }} LT</span>
        </div>
    </div>
</template>
  
<script>
import CartItemsList from './CartItemsList.vue';
export default {
    components: {
        CartItemsList,
    }
}
</script>