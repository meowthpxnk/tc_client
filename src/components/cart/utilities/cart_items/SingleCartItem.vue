<template>
    <div class="item">
        <div class="image">
            <img class="default-img" :src="dish.image" alt="">
        </div>
        <div class="info">
            <div class="title">
                <span>{{ dish.name }}</span>
            </div>
            <div class="price">
                <span>{{ dish.price }} LT</span>
            </div>
        </div>
        <change-cart-dish-amount :id="id" />
    </div>

    <div class="dash" />
</template>

<script>
import ChangeCartDishAmount from '@/components/utilities/ChangeCartDishAmount.vue';

export default {
    components: {
        ChangeCartDishAmount
    },
    props: {
        id: Number
    },
    computed: {
        dish(){
            return this.$store.getters.getDishById(this.id)
        }
    }
}
</script>