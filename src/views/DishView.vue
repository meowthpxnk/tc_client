<template>
    <dish-component />
</template>
  
<script>
import DishComponent from '@/components/dishes/DishComponent.vue';
export default {
    components: {
        DishComponent,
    },
    async mounted(){
        this.$store.commit("enableMainPreloader")
        await this.$store.dispatch("loadLanguageCode")

        await this.$store.dispatch("getDishById", this.$route.params.id)
        this.$store.commit("disableMainPreloader")
    },
    unmounted(){
        this.$store.commit("deleteActiveDish")
    }
}
</script>