<template>
    <div class="customer-name util">
        <div class="title">
            <span>{{ $store.getters.getStringFromKey('change_user_name_title') }}</span>
        </div>
        <div class="content">
            <input type="text" :placeholder="$store.getters.getStringFromKey('change_user_name_ph')" v-model="input_data" @input="changeInputData">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const user_data = window.localStorage.getItem('user_data')
        if (user_data) {
            this.input_data = JSON.parse(user_data).name
        }
    },
    data() {
        return {
            input_data: ''
        }
    },
    methods: {
        changeInputData() {
            this.$store.commit("updateUserName", this.input_data)
        }
    }
}
</script>