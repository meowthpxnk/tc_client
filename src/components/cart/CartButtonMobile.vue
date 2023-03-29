<template>
    <div class="cart-mobile-btn" v-if="shownBlock && $store.getters.isCartEmpty">
        <div class="wrap mp-block">
            <div class="price">
                <span>{{ $store.getters.getCartPrice }} LT</span>
            </div>
            <button class="btn-mobile" @click="goToCart">
                <span>{{ $store.getters.getStringFromKey('to_cart_btn') }}</span>
            </button>
            <button class="btn-desk" @click="goToCart">
                <span>{{ $store.getters.getCartPrice }} LT</span>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    methods:{
        goToCart(){
            this.$router.push({name: 'cart'})
        }
    },
    computed:{
        shownBlock(){
            return this.$route.name !== 'cart'
        }
    }
}
</script>