<template>
    <div class="image">
        <img :src="image" alt="">
    </div>
    <div class="title">
        <span>{{ name }}</span>
    </div>
    <div class="price">
        <span>{{ price }} LT</span>
    </div>
    <add-to-cart-btns :id="id" />
</template>
<script>
import AddToCartBtns from '@/components/utilities/AddToCartBtns.vue';
export default {
    components: {
        AddToCartBtns
    },
    props: {
        id: Number,
        name: String,
        price: Number,
        image: String,
    }
}
</script>