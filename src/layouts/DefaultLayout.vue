<template>
    <header-component />
    <router-view />
    <cart-button-mobile />

    <all-modals-component />

    <main-preloader v-if="$store.getters.isMainPreloaderActive" />
</template>
  
<script>
import CartButtonMobile from '@/components/cart/CartButtonMobile.vue';

import HeaderComponent from '@/components/HeaderComponent.vue';
import AllModalsComponent from '@/components/modals/AllModalsComponent.vue';

import MainPreloader from '@/components/preloaders/MainPreloader.vue';

export default {
    components: {
        HeaderComponent,
        AllModalsComponent,
        CartButtonMobile,

        MainPreloader,
    },
    async mounted() {
        this.$store.commit("enableMainPreloader")
        await this.$store.dispatch("loadLanguageCode")
        
        await this.$store.dispatch("getMenu")
        await this.$store.dispatch("loadCartItems")
        await this.$store.dispatch("loadOrderSettings")
        await this.$store.dispatch("loadUserData")
        this.$store.commit("disableMainPreloader")
    },
}
</script>

<style lang="css" scoped></style>