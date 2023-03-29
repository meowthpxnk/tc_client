<template>
    <div class="comment util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_order_comment_title') }}</span>
        </div>
        <div class="content">
            <textarea name="" id="" cols="30" rows="10"
                :placeholder="$store.getters.getStringFromKey('change_order_comment_ph')" @input="changeInputData"
                v-model="input_data" />
        </div>
    </div>
</template>

<script>
export default {
    async mounted() {
        const order_settings = window.localStorage.getItem('order_settings')
        if (order_settings) {
            this.input_data = JSON.parse(order_settings).comment
        }
    },
    data() {
        return {
            input_data: '',
        }
    },
    methods: {
        changeInputData() {
            this.$store.commit("updateOrderComment", this.input_data)
        }
    }
}
</script>