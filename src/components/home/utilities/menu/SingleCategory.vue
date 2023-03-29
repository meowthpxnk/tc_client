<template>
    <div class="title">
        <span>{{ name }}</span>
    </div>
    <dishes-list :category_id="id" />
</template>
  
<script>
import DishesList from './DishesList.vue';
export default {
    components: {
        DishesList
    },
    props: {
        name: String,
        id: Number,
    }
}
</script>