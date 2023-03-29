<template>
    <div class="dish-main mp-block mp-padding">
        <div class="main">
            <div class="image">
                <img class="default-img" :src="dish.image" alt="">
            </div>
            <add-to-cart-btns :id="parseInt($route.params.id)"/>
        </div>
        <div class="text">
            <div class="title">
                <span>{{ dish.name }}</span>
            </div>
            <div class="price">
                <span>{{ dish.price }} LT</span>
            </div>
            <div class="portion">
                <span>{{ dish.portion }}</span>
            </div>
            <div class="description">
                <span>{{ dish.description }}</span>
            </div>
            <div class="ingredients">
                <span>{{ dish.ingredients }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
import AddToCartBtns from '../utilities/AddToCartBtns.vue';
export default {
    components: {
        AddToCartBtns
    },
    computed: {
        dish(){
            return this.$store.getters.getActiveDish
        }
    }
}
</script>