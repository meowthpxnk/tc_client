<template>
    <ul class="dishes-list">
        <li v-for="dish in $store.getters.getDishesByCategoryId(category_id)" :key="dish" class="clickable"
            @click="goToDish(dish.id)">
            <single-dish :image="dish.image" :name="dish.name" :id="dish.id" :price="dish.price" />
        </li>
    </ul>
</template>
  
<script>
import SingleDish from './SingleDish.vue';
export default {
    components: {
        SingleDish
    },
    methods: {
        goToDish(id) {
            this.$router.push({ name: 'dish', params: { id: id } })
        }
    },
    props: {
        category_id: Number,
    }
}
</script>