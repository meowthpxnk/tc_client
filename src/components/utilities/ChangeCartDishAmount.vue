<template>
    <div class="add-buttons">
        <button class="minus" @click.stop="removeItem">-</button>
        <span>{{ amount }}</span>
        <button class="plus" @click.stop="addItem">+</button>
    </div>
</template>

<script>
import add_to_cart_btn from '@/mixins/add_to_cart_btn';
export default{
    mixins: [add_to_cart_btn],
}

</script>