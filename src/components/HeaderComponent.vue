<template>
    <header>
        <div class="wrapper mp-block mp-padding">
            <div class="logo" id="kotik" @click="goHome">
                <img class="default-img clickable" src="@/assets/imgs/logo.png" alt="">
            </div>
            <button class="cart-button" @click="goToCart" v-if="$route.name !== 'cart' && $store.getters.isCartEmpty">
                <div class="icon">
                    <img class="default-img" src="@/assets/icons/cart.png" alt="">
                </div>
                <div class="amount">
                    <span>{{ $store.getters.getCartPrice }}</span>
                </div>
            </button>
            <div class="languages">
                <button @click="$store.commit('enableLanguageModal')">
                    <span>{{ $store.getters.getLanguageCode }}</span>
                </button>
            </div>
            <button class="call-button">
                <div class="icon">
                    <img class="default-img" src="@/assets/icons/phone.png" alt="">
                </div>
                <div class="text">
                    <div class="phrase">{{ $store.getters.getStringFromKey('call_to_us_btn') }}</div>
                    <div class="phone-number">+333-877-0703</div>
                </div>
            </button>
        </div>
    </header>
</template>
  
<script>
export default {
    methods:{
        goHome(){
            this.$router.push({name: 'home'})
        },
        goToCart(){
            this.$router.push({name: 'cart'})
        }
    }
}
</script>