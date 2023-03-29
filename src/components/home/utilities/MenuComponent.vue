<template>
    <div class="mp-padding menu-load">
        <ul class="categories">
            <li v-for="category in $store.getters.getCategories" :key="category" :id="`category-${category.id}`">
                <single-category :name="category.name" :id="category.id" />
            </li>
        </ul>
    </div>
</template>
  
<script>
import SingleCategory from './menu/SingleCategory.vue';
export default {
    components: {
        SingleCategory,
    }

}
</script>