<template>
    <div class="delivery-address util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_delivery_address_title') }}</span>
        </div>
        <div class="content">
            <input type="text" :placeholder="$store.getters.getStringFromKey('change_delivery_address_ph')"
                @input="changeInputData" v-model="input_data">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const user_data = window.localStorage.getItem('user_data')
        if (user_data) {
            this.input_data = JSON.parse(user_data).address
        }
    },
    data() {
        return {
            input_data: ''
        }
    },
    methods: {
        changeInputData() {
            this.$store.commit("updateUserAddress", this.input_data)
        }
    }
}
</script>