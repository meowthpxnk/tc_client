<template>
    <div class="add-to-cart-btns">
        <div class="change-quantity" v-if="amount > 0">
            <button class="minus colored" @click.stop="removeItem">-</button>
            <span class="colored quantity">{{ amount }}</span>
            <button class="plus colored" @click.stop="addItem">+</button>
        </div>
        <div class="add" v-else>
            <button class="colored add-btn" @click.stop="addToCart">
                <span>{{ $store.getters.getStringFromKey('add_to_cart_btn') }}</span>
            </button>
        </div>
    </div>
</template>

<script>
import add_to_cart_btn from '@/mixins/add_to_cart_btn';
export default {
    mixins: [add_to_cart_btn]
}
</script>