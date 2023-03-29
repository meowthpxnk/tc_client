<template>
    <header-info />
    <categories-list />
    <menu-component />
</template>
  
<script>
import MenuComponent from './utilities/MenuComponent.vue';
import HeaderInfo from './utilities/HeaderInfo.vue';
import CategoriesList from './utilities/menu/CategoriesList.vue';
export default {
    components: {
        HeaderInfo,
        MenuComponent,
        CategoriesList,
    }
}
</script>