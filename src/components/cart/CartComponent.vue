<template>
    <div class="mp-block cart-main" v-if="$store.getters.isCartEmpty">
        <cart-items-block />
        <order-settings-block />
    </div>
    <div class="mp-block cart-main" v-else>
        <div class="cart-block cart-items">
            <div class="title empty-cart">
                <span>{{ $store.getters.getStringFromKey('empty_cart_msg') }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
import CartItemsBlock from './utilities/cart_items/CartItemsBlock.vue';
import OrderSettingsBlock from './utilities/order_settings/OrderSettingsBlock.vue';

export default {
    components: {
        CartItemsBlock,
        OrderSettingsBlock,
    }
}
</script>